import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ddilnzgdiuybinnvrogu.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRkaWxuemdkaXV5YmlubnZyb2d1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk4ODc2NjUsImV4cCI6MjAzNTQ2MzY2NX0.3_ieg5TcFz7rTiUs-ZeQrJ2ABtInkQWKz00RMzagKwI";

export const supabase = createClient(supabaseUrl, supabaseKey);
