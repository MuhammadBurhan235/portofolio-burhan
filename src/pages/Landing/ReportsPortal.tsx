import { useState, useEffect } from "react";
import { Button, Card, Row, Col } from "react-bootstrap";
import { formatDistanceToNow, parseISO } from "date-fns";
import { supabase } from "../../supabaseClient";

interface report {
  id: number;
  created_at: string;
  image_url: string;
  subjek: string;
  jawaban: string;
  deskripsi: string;
  kategori: string;
  status: "Delivered" | "On Going" | "Solved";
}

const ReportsPortal: React.FC = () => {
  const [reports, setReports] = useState<report[]>([]);

  useEffect(() => {
    const fetchReports = async () => {
      const { data, error } = await supabase.from("reports").select("*");
      if (error) {
        console.error("Error fetching reports:", error);
      } else {
        setReports(data as report[]); // Explicitly cast to report[]
      }
    };

    // Initial fetch
    fetchReports();

    // Real-time subscription
    const channel = supabase
      .channel("reports")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "reports" },
        (payload) => {
          const newReport = payload.new as report;
          if (newReport && newReport.id && newReport.created_at) {
            setReports((prevReports) => [newReport, ...prevReports]);
          }
        }
      )
      .subscribe();

    // Interval for periodic fetching
    const intervalId = setInterval(() => {
      console.log("Fetching reports via interval...");
      fetchReports();
    }, 6000);

    return () => {
      supabase.removeChannel(channel);
      clearInterval(intervalId);
    };
  }, []);

  const [activeDescription, setActiveDescription] = useState<
    Record<number, number>
  >({});
  const [currentTime, setCurrentTime] = useState(new Date());
  const [mode, setMode] = useState<"IG" | "YT">("IG"); // Default to IG mode

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  const getRelativeTime = (createdAt: string) => {
    const date = parseISO(createdAt);
    const timeDifference = formatDistanceToNow(date, { addSuffix: true });

    const daysDifference = Math.floor(
      (currentTime.getTime() - date.getTime()) / (1000 * 3600 * 24)
    );
    if (daysDifference > 7) {
      return date.toLocaleDateString();
    }
    return timeDifference;
  };

  const toggleDescription = (index: number, descriptionIndex: number) => {
    setActiveDescription((prevState) => ({
      ...prevState,
      [index]: descriptionIndex,
    }));
  };

  return (
    <div>
      {/* Title and Mode Selection */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="text-center">Reports Portal</h5>
        <div className="btn-group">
          <Button
            variant={mode === "IG" ? "primary" : "secondary"}
            onClick={() => setMode("IG")}
          >
            Mode IG
          </Button>
          <Button
            variant={mode === "YT" ? "primary" : "secondary"}
            onClick={() => setMode("YT")}
          >
            Mode YT
          </Button>
        </div>
      </div>

      {/* Reports List */}
      <div
        className="overflow-auto"
        style={{
          height: "400px",
          maxHeight: "400px",
          border: "1px solid #ccc",
          borderRadius: "10px",
          padding: "10px",
          boxSizing: "border-box", // Tambahkan ini
        }}
      >
        <Row
          className={mode === "YT" ? "g-1" : ""}
          style={{
            display: mode === "YT" ? "grid" : "block",
            gridTemplateColumns:
              mode === "YT" ? "repeat(auto-fit, minmax(300px, 1fr))" : "none",
            margin: 0, // Pastikan margin 0
          }}
        >
          {reports.map((report, index) => {
            const currentDescription =
              activeDescription[index] === 2
                ? report.jawaban
                : report.deskripsi;

            return (
              <Col key={report.id}>
                <Card
                  className="mb-1"
                  style={{
                    overflow: "hidden", // Pastikan kontainer tidak meluap
                    borderRadius: "10px", // Sesuaikan dengan desain
                  }}
                >
                  <Row
                    className={mode === "YT" ? "" : "align-items-center"}
                    style={{ padding: "10px" }}
                  >
                    {/* Media Container */}
                    <Col
                      md={mode === "YT" ? 12 : 0}
                      style={{
                        height: "200px",
                        overflow: "hidden",
                        borderRadius: "10px",
                      }}
                    >
                      <Card.Img
                        src={report.image_url}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </Col>
                    <Col md={mode === "YT" ? 12 : 8}>
                      <Card.Body
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          height: "100%",
                          paddingBlock: mode === "YT" ? "30px" : "",
                        }}
                      >
                        {/* Container untuk Title, Status, dan Buttons */}
                        <div style={{ height: "84px" }}>
                          {/* Title */}
                          <Card.Title
                            style={{
                              display: "-webkit-box",
                              WebkitLineClamp: 2,
                              WebkitBoxOrient: "vertical",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              height: "54px",
                            }}
                          >
                            {report.subjek}
                          </Card.Title>

                          {/* Status and Controls */}
                          <div
                            className="d-flex justify-content-between align-items-center mb-2"
                            style={{ height: "30px" }}
                          >
                            {mode === "IG" && (
                              <div className="d-flex gap-2">
                                <Button
                                  size="sm"
                                  variant={
                                    activeDescription[index] !== 2
                                      ? "primary"
                                      : "secondary"
                                  }
                                  onClick={() => toggleDescription(index, 1)}
                                >
                                  Deskripsi
                                </Button>
                                <Button
                                  size="sm"
                                  variant={
                                    activeDescription[index] === 2
                                      ? "primary"
                                      : "secondary"
                                  }
                                  onClick={() => toggleDescription(index, 2)}
                                >
                                  Jawaban
                                </Button>
                              </div>
                            )}
                            <div className="d-flex gap-2">
                              <span
                                className={`badge bg-${
                                  report.status === "Solved"
                                    ? "success"
                                    : "warning"
                                }`}
                              >
                                {report.status}
                              </span>
                              <span className="badge bg-info">
                                {report.kategori}
                              </span>
                              <span className="badge bg-secondary">
                                {getRelativeTime(report.created_at)}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Container untuk Description */}
                        {mode === "IG" && (
                          <div
                            style={{
                              display: "-webkit-box",
                              WebkitLineClamp: 3,
                              WebkitBoxOrient: "vertical",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              height: "74px",
                              marginTop: "10px",
                            }}
                          >
                            <Card.Text>{currentDescription}</Card.Text>
                          </div>
                        )}
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
};

export default ReportsPortal;
