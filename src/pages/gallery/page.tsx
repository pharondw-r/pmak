import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import { supabase } from "@/lib/supabase";

interface GalleryPhoto {
  id: string;
  src: string;
  alt: string;
}

interface GalleryVideo {
  id: string;
  src: string;
  poster: string;
  title: string;
  desc: string;
}

export default function GalleryPage() {
  const [photos, setPhotos] = useState<GalleryPhoto[]>([]);
  const [videos, setVideos] = useState<GalleryVideo[]>([]);
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [showAddPhoto, setShowAddPhoto] = useState(false);
  const [showAddVideo, setShowAddVideo] = useState(false);
  const [photoInputMode, setPhotoInputMode] = useState<"file" | "url">("file");
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [photoFilePreview, setPhotoFilePreview] = useState<string | null>(null);
  const photoFileRef = useRef<HTMLInputElement>(null);
  const [videoInputMode, setVideoInputMode] = useState<"file" | "url">("file");
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [videoFilePreview, setVideoFilePreview] = useState<string | null>(null);
  const videoFileRef = useRef<HTMLInputElement>(null);
  const [newPhotoUrl, setNewPhotoUrl] = useState("");
  const [newPhotoAlt, setNewPhotoAlt] = useState("");
  const [newVideoUrl, setNewVideoUrl] = useState("");
  const [newVideoPoster, setNewVideoPoster] = useState("");
  const [newVideoTitle, setNewVideoTitle] = useState("");
  const [newVideoDesc, setNewVideoDesc] = useState("");
  const [loading, setLoading] = useState(true);

  // Fetch from Supabase
  useEffect(() => {
    const fetchGallery = async () => {
      setLoading(true);
      const [{ data: photoData, error: photoErr }, { data: videoData, error: videoErr }] =
        await Promise.all([
          supabase.from("gallery_photos").select("id, src, alt, created_at").order("created_at", { ascending: false }),
          supabase.from("gallery_videos").select("id, src, poster, title, description, created_at").order("created_at", { ascending: false }),
        ]);

      if (!photoErr && photoData) {
        setPhotos(photoData.map((p) => ({ id: p.id, src: p.src, alt: p.alt || "" })));
      }
      if (!videoErr && videoData) {
        setVideos(videoData.map((v) => ({
          id: v.id,
          src: v.src,
          poster: v.poster || v.src,
          title: v.title || "Video",
          desc: v.description || "",
        })));
      }
      setLoading(false);
    };
    fetchGallery();
  }, []);

  const handlePhotoFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) return;
    if (file.size > 5 * 1024 * 1024) {
      alert("File too large. Max 5MB.");
      return;
    }
    setPhotoFile(file);
    const reader = new FileReader();
    reader.onload = (ev) => {
      setPhotoFilePreview(ev.target?.result as string);
    };
    reader.readAsDataURL(file);
  };

  const addPhoto = async (e: React.FormEvent) => {
    e.preventDefault();
    if (photoInputMode === "file") {
      if (!photoFile || !photoFilePreview) return;
      const { data, error } = await supabase.from("gallery_photos").insert({
        src: photoFilePreview,
        alt: newPhotoAlt.trim() || photoFile.name || "Gallery photo",
      }).select().single();

      if (error) {
        alert("Failed to upload photo. Please try again.");
        return;
      }

      setPhotos((prev) => [{ id: data.id, src: data.src, alt: data.alt }, ...prev]);
      setPhotoFile(null);
      setPhotoFilePreview(null);
      setNewPhotoAlt("");
      if (photoFileRef.current) photoFileRef.current.value = "";
      setShowAddPhoto(false);
    } else {
      if (!newPhotoUrl.trim()) return;
      const { data, error } = await supabase.from("gallery_photos").insert({
        src: newPhotoUrl.trim(),
        alt: newPhotoAlt.trim() || "Gallery photo",
      }).select().single();

      if (error) {
        alert("Failed to add photo. Please try again.");
        return;
      }

      setPhotos((prev) => [{ id: data.id, src: data.src, alt: data.alt }, ...prev]);
      setNewPhotoUrl("");
      setNewPhotoAlt("");
      setShowAddPhoto(false);
    }
  };

  const deletePhoto = async (id: string) => {
    const { error } = await supabase.from("gallery_photos").delete().eq("id", id);
    if (error) {
      alert("Failed to delete photo.");
      return;
    }
    setPhotos((prev) => prev.filter((p) => p.id !== id));
  };

  const handleVideoFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("video/")) return;
    if (file.size > 20 * 1024 * 1024) {
      alert("Video too large. Max 20MB.");
      return;
    }
    setVideoFile(file);
    const reader = new FileReader();
    reader.onload = (ev) => {
      setVideoFilePreview(ev.target?.result as string);
    };
    reader.readAsDataURL(file);
  };

  const addVideo = async (e: React.FormEvent) => {
    e.preventDefault();
    if (videoInputMode === "file") {
      if (!videoFile || !videoFilePreview) return;
      const { data, error } = await supabase.from("gallery_videos").insert({
        src: videoFilePreview,
        poster: "",
        title: newVideoTitle.trim() || videoFile.name || "New Video",
        description: newVideoDesc.trim(),
      }).select().single();

      if (error) {
        alert("Failed to upload video. Please try again.");
        return;
      }

      setVideos((prev) => [{
        id: data.id,
        src: data.src,
        poster: data.poster || "",
        title: data.title || "New Video",
        desc: data.description || "",
      }, ...prev]);
      setVideoFile(null);
      setVideoFilePreview(null);
      setNewVideoTitle("");
      setNewVideoDesc("");
      if (videoFileRef.current) videoFileRef.current.value = "";
      setShowAddVideo(false);
    } else {
      if (!newVideoUrl.trim()) return;
      const { data, error } = await supabase.from("gallery_videos").insert({
        src: newVideoUrl.trim(),
        poster: newVideoPoster.trim() || newVideoUrl.trim(),
        title: newVideoTitle.trim() || "New Video",
        description: newVideoDesc.trim(),
      }).select().single();

      if (error) {
        alert("Failed to add video. Please try again.");
        return;
      }

      setVideos((prev) => [{
        id: data.id,
        src: data.src,
        poster: data.poster || data.src,
        title: data.title || "New Video",
        desc: data.description || "",
      }, ...prev]);
      setNewVideoUrl("");
      setNewVideoPoster("");
      setNewVideoTitle("");
      setNewVideoDesc("");
      setShowAddVideo(false);
    }
  };

  const deleteVideo = async (id: string) => {
    const { error } = await supabase.from("gallery_videos").delete().eq("id", id);
    if (error) {
      alert("Failed to delete video.");
      return;
    }
    setVideos((prev) => prev.filter((v) => v.id !== id));
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[320px] md:h-[450px] w-full overflow-hidden">
        <img
          src="https://static.readdy.ai/image/7ee16377f73c76339410583be50ac696/d486685c506962e39ecfc6f0a358498c.jpeg"
          alt="Stunning underwater diving photography"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <p className="text-white/80 text-xs md:text-sm tracking-[0.2em] uppercase mb-4 font-['DM_Sans']">
            PMAK Ocean Hub
          </p>
          <h1 className="font-['Playfair_Display'] text-white text-4xl md:text-6xl leading-tight mb-4">
            Gallery
          </h1>
          <p className="text-white/80 text-sm md:text-base max-w-lg font-['DM_Sans'] font-light">
            Moments from our dives and e-Foil sessions across Fujairah and Dubai.
          </p>
        </div>
      </section>

      {/* Photo Grid */}
      <section className="w-full py-16 md:py-24 px-6 md:px-10 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8 md:mb-10">
            <h2 className="font-['Playfair_Display'] text-stone-900 text-2xl md:text-3xl">
              Photos
            </h2>
            <div className="flex items-center gap-3">
              <span className="text-stone-400 text-sm font-['DM_Sans']">
                {photos.length} shots
              </span>
              <button
                onClick={() => setShowAddPhoto(!showAddPhoto)}
                className="px-4 py-2 bg-stone-900 text-white rounded-full text-xs font-medium hover:bg-stone-700 transition-colors whitespace-nowrap"
              >
                {showAddPhoto ? "Cancel" : "Add Photo"}
              </button>
            </div>
          </div>

          {showAddPhoto && (
            <form onSubmit={addPhoto} className="bg-[#FAFAF7] rounded-2xl p-5 md:p-6 mb-8 max-w-xl">
              <h3 className="font-['Playfair_Display'] text-stone-900 text-lg mb-4">Add a Photo</h3>

              {/* Tabs */}
              <div className="flex items-center gap-2 mb-4">
                <button
                  type="button"
                  onClick={() => setPhotoInputMode("file")}
                  className={`px-4 py-2 rounded-full text-xs font-medium transition-colors whitespace-nowrap ${
                    photoInputMode === "file"
                      ? "bg-stone-900 text-white"
                      : "bg-white border border-stone-200 text-stone-600 hover:bg-stone-50"
                  }`}
                >
                  <i className="ri-upload-cloud-2-line mr-1" />
                  Upload from Device
                </button>
                <button
                  type="button"
                  onClick={() => setPhotoInputMode("url")}
                  className={`px-4 py-2 rounded-full text-xs font-medium transition-colors whitespace-nowrap ${
                    photoInputMode === "url"
                      ? "bg-stone-900 text-white"
                      : "bg-white border border-stone-200 text-stone-600 hover:bg-stone-50"
                  }`}
                >
                  <i className="ri-link mr-1" />
                  Paste Link
                </button>
              </div>

              {photoInputMode === "file" && (
                <div className="space-y-3 mb-4">
                  <div className="relative">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handlePhotoFileChange}
                      ref={photoFileRef}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <div className="w-full bg-white border-2 border-dashed border-stone-300 rounded-xl px-4 py-8 text-center hover:border-stone-400 transition-colors">
                      <i className="ri-image-add-line text-stone-400 text-2xl mb-2" />
                      <p className="text-stone-600 text-sm font-medium">Click to choose a photo</p>
                      <p className="text-stone-400 text-xs mt-1">JPG, PNG, WEBP up to 5MB</p>
                    </div>
                  </div>
                  {photoFilePreview && (
                    <div className="relative rounded-xl overflow-hidden w-full h-48">
                      <img src={photoFilePreview} alt="Preview" className="w-full h-full object-cover" />
                      <button
                        type="button"
                        onClick={() => { setPhotoFile(null); setPhotoFilePreview(null); if (photoFileRef.current) photoFileRef.current.value = ""; }}
                        className="absolute top-2 right-2 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center text-stone-600 hover:text-red-500 transition-colors"
                      >
                        <i className="ri-close-line text-sm" />
                      </button>
                    </div>
                  )}
                </div>
              )}

              {photoInputMode === "url" && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                  <input
                    type="url"
                    value={newPhotoUrl}
                    onChange={(e) => setNewPhotoUrl(e.target.value)}
                    placeholder="Photo URL"
                    className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-800 focus:outline-none focus:border-stone-400"
                  />
                  <input
                    type="text"
                    value={newPhotoAlt}
                    onChange={(e) => setNewPhotoAlt(e.target.value)}
                    placeholder="Description (optional)"
                    className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-800 focus:outline-none focus:border-stone-400"
                  />
                </div>
              )}

              <button
                type="submit"
                disabled={photoInputMode === "file" && !photoFile}
                className="px-5 py-2 bg-stone-900 text-white rounded-full text-sm font-medium hover:bg-stone-700 transition-colors whitespace-nowrap disabled:opacity-40"
              >
                Add to Gallery
              </button>
            </form>
          )}

          {loading && (
            <div className="bg-[#FAFAF7] rounded-2xl p-10 md:p-14 text-center">
              <div className="w-10 h-10 border-2 border-stone-300 border-t-stone-900 rounded-full animate-spin mx-auto mb-4" />
              <p className="text-stone-500 text-sm font-['DM_Sans']">Loading gallery...</p>
            </div>
          )}

          {!loading && photos.length === 0 && !showAddPhoto && (
            <div className="bg-[#FAFAF7] rounded-2xl p-10 md:p-14 text-center">
              <div className="w-14 h-14 flex items-center justify-center bg-stone-200 rounded-full mx-auto mb-4">
                <i className="ri-image-line text-stone-500 text-xl" />
              </div>
              <h3 className="font-['Playfair_Display'] text-stone-700 text-lg mb-2">No photos yet</h3>
              <p className="text-stone-500 text-sm font-['DM_Sans'] font-light mb-4 max-w-sm mx-auto">
                Click Add Photo above to upload from your device or paste an image link.
              </p>
              <button
                onClick={() => setShowAddPhoto(true)}
                className="px-5 py-2 bg-stone-900 text-white rounded-full text-sm font-medium hover:bg-stone-700 transition-colors whitespace-nowrap"
              >
                Add Your First Photo
              </button>
            </div>
          )}

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {photos.map((photo) => (
              <div
                key={photo.id}
                className="group relative rounded-xl overflow-hidden w-full block h-56 md:h-72"
              >
                <button
                  onClick={() => setLightbox(photo.src)}
                  className="w-full h-full block"
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </button>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 pointer-events-none" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="w-10 h-10 flex items-center justify-center bg-white/90 rounded-full">
                    <i className="ri-zoom-in-line text-stone-900" />
                  </div>
                </div>
                <button
                  onClick={() => deletePhoto(photo.id)}
                  className="absolute top-2 right-2 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center text-stone-600 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"
                  title="Delete photo"
                >
                  <i className="ri-delete-bin-line text-sm" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Videos */}
      <section className="w-full bg-[#FAFAF7] py-16 md:py-24 px-6 md:px-10 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8 md:mb-10">
            <h2 className="font-['Playfair_Display'] text-stone-900 text-2xl md:text-3xl">
              Videos
            </h2>
            <div className="flex items-center gap-3">
              <span className="text-stone-400 text-sm font-['DM_Sans']">
                {videos.filter((v) => v.src.endsWith(".mp4") || v.src.startsWith("data:video/")).length} reels
              </span>
              <button
                onClick={() => setShowAddVideo(!showAddVideo)}
                className="px-4 py-2 bg-stone-900 text-white rounded-full text-xs font-medium hover:bg-stone-700 transition-colors whitespace-nowrap"
              >
                {showAddVideo ? "Cancel" : "Add Video"}
              </button>
            </div>
          </div>

          {showAddVideo && (
            <form onSubmit={addVideo} className="bg-white rounded-2xl p-5 md:p-6 mb-8 max-w-xl">
              <h3 className="font-['Playfair_Display'] text-stone-900 text-lg mb-4">Add a Video</h3>

              <div className="flex items-center gap-2 mb-4">
                <button
                  type="button"
                  onClick={() => setVideoInputMode("file")}
                  className={`px-4 py-2 rounded-full text-xs font-medium transition-colors whitespace-nowrap ${
                    videoInputMode === "file"
                      ? "bg-stone-900 text-white"
                      : "bg-stone-50 border border-stone-200 text-stone-600 hover:bg-stone-100"
                  }`}
                >
                  <i className="ri-upload-cloud-2-line mr-1" />
                  Upload from Device
                </button>
                <button
                  type="button"
                  onClick={() => setVideoInputMode("url")}
                  className={`px-4 py-2 rounded-full text-xs font-medium transition-colors whitespace-nowrap ${
                    videoInputMode === "url"
                      ? "bg-stone-900 text-white"
                      : "bg-stone-50 border border-stone-200 text-stone-600 hover:bg-stone-100"
                  }`}
                >
                  <i className="ri-link mr-1" />
                  Paste Link
                </button>
              </div>

              {videoInputMode === "file" && (
                <div className="space-y-3 mb-4">
                  <div className="relative">
                    <input
                      type="file"
                      accept="video/*"
                      onChange={handleVideoFileChange}
                      ref={videoFileRef}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <div className="w-full bg-stone-50 border-2 border-dashed border-stone-300 rounded-xl px-4 py-8 text-center hover:border-stone-400 transition-colors">
                      <i className="ri-movie-line text-stone-400 text-2xl mb-2" />
                      <p className="text-stone-600 text-sm font-medium">Click to choose a video</p>
                      <p className="text-stone-400 text-xs mt-1">MP4, MOV up to 20MB</p>
                    </div>
                  </div>
                  {videoFilePreview && (
                    <div className="relative rounded-xl overflow-hidden w-full bg-stone-900">
                      <video src={videoFilePreview} className="w-full h-48 object-contain" controls />
                      <button
                        type="button"
                        onClick={() => { setVideoFile(null); setVideoFilePreview(null); if (videoFileRef.current) videoFileRef.current.value = ""; }}
                        className="absolute top-2 right-2 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center text-stone-600 hover:text-red-500 transition-colors"
                      >
                        <i className="ri-close-line text-sm" />
                      </button>
                    </div>
                  )}
                </div>
              )}

              {videoInputMode === "url" && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                  <input
                    type="url"
                    value={newVideoUrl}
                    onChange={(e) => setNewVideoUrl(e.target.value)}
                    placeholder="Video URL (.mp4)"
                    className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-800 focus:outline-none focus:border-stone-400"
                  />
                  <input
                    type="url"
                    value={newVideoPoster}
                    onChange={(e) => setNewVideoPoster(e.target.value)}
                    placeholder="Poster image URL (optional)"
                    className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-800 focus:outline-none focus:border-stone-400"
                  />
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                <input
                  type="text"
                  value={newVideoTitle}
                  onChange={(e) => setNewVideoTitle(e.target.value)}
                  placeholder="Title"
                  className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-800 focus:outline-none focus:border-stone-400"
                />
                <input
                  type="text"
                  value={newVideoDesc}
                  onChange={(e) => setNewVideoDesc(e.target.value)}
                  placeholder="Description (optional)"
                  className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-800 focus:outline-none focus:border-stone-400"
                />
              </div>

              <button
                type="submit"
                disabled={videoInputMode === "file" && !videoFile}
                className="px-5 py-2 bg-stone-900 text-white rounded-full text-sm font-medium hover:bg-stone-700 transition-colors whitespace-nowrap disabled:opacity-40"
              >
                Add to Gallery
              </button>
            </form>
          )}

          {!loading && videos.length === 0 && !showAddVideo && (
            <div className="bg-white rounded-2xl p-10 md:p-14 text-center">
              <div className="w-14 h-14 flex items-center justify-center bg-stone-100 rounded-full mx-auto mb-4">
                <i className="ri-movie-line text-stone-400 text-xl" />
              </div>
              <h3 className="font-['Playfair_Display'] text-stone-700 text-lg mb-2">No videos yet</h3>
              <p className="text-stone-500 text-sm font-['DM_Sans'] font-light mb-4 max-w-sm mx-auto">
                Click Add Video above to upload a reel from your device or paste a video link.
              </p>
              <button
                onClick={() => setShowAddVideo(true)}
                className="px-5 py-2 bg-stone-900 text-white rounded-full text-sm font-medium hover:bg-stone-700 transition-colors whitespace-nowrap"
              >
                Add Your First Video
              </button>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            {videos
              .filter((video) => video.src.endsWith(".mp4") || video.src.startsWith("data:video/"))
              .map((video) => (
                <div key={video.id} className="bg-white rounded-2xl overflow-hidden relative group">
                  <div className="relative aspect-video">
                    <video
                      className="w-full h-full object-cover"
                      controls
                      poster={video.poster}
                    >
                      <source src={video.src} type="video/mp4" />
                    </video>
                  </div>
                  <div className="p-4 md:p-5">
                    <h3 className="font-['Playfair_Display'] text-stone-900 text-lg mb-1">
                      {video.title}
                    </h3>
                    <p className="text-stone-500 text-sm font-['DM_Sans'] font-light">
                      {video.desc}
                    </p>
                  </div>
                  <button
                    onClick={() => deleteVideo(video.id)}
                    className="absolute top-2 right-2 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center text-stone-600 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"
                    title="Delete video"
                  >
                    <i className="ri-delete-bin-line text-sm" />
                  </button>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-white/70 hover:text-white"
          >
            <i className="ri-close-line text-2xl" />
          </button>
          <img
            src={lightbox}
            alt="Gallery full size"
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
          />
        </div>
      )}

      <Footer />
    </div>
  );
}