import { supabase } from "../../supabaseClient";

export const useUploadImage = () => {
  const uploadImage = async (file: File) => {
    const user = await supabase.auth.getUser();

    if (!user.data) throw new Error("User not authenticated");

    // Upload the image to Supabase Storage
    const { data, error } = await supabase.storage
      .from("mosque-images")
      .upload(`${user.data.user?.id}/${file.name}`, file, {
        cacheControl: "3600",
        upsert: false,
      });

    if (error) throw error;

    // Get the public URL of the uploaded image
    const { data: publicUrlData } = supabase.storage
      .from("mosque-images")
      .getPublicUrl(data?.path || "");

    if (!publicUrlData) throw new Error("Unable to get the public URL");

    const imageUrl = publicUrlData.publicUrl;

    // Save the image URL to the `mosque_images` table
    const { error: insertError } = await supabase.from("mosque_images").insert({
      user_id: user.data.user?.id,
      image_url: imageUrl,
    });

    if (insertError) throw insertError;

    return imageUrl;
  };

  return { uploadImage };
};
