import { useState, useEffect } from "react";

interface Review {
  id: number;
  name: string;
  rating: number;
  text: string;
  date: string;
  reply?: {
    text: string;
    date: string;
  };
}

const INITIAL_REVIEWS: Review[] = [
  {
    id: 1,
    name: "Ahmed R.",
    rating: 5,
    text: "First time scuba diving and the team made it feel so easy. Snoopy Island was unreal, saw three sea turtles in one dive. Already booked my Open Water course.",
    date: "May 2026",
    reply: {
      text: "Thanks Ahmed! So glad you loved the turtles at Snoopy. Looking forward to certifying you. See you underwater soon!",
      date: "May 2026",
    },
  },
  {
    id: 2,
    name: "Sarah & Tom",
    rating: 5,
    text: "Did the underwater proposal dive and they planned every detail perfectly. She said yes and the photos came out incredible. Thank you PMAK crew!",
    date: "April 2026",
    reply: {
      text: "Congratulations to you both! It was an honor to be part of your special moment. Wishing you a lifetime of adventure together.",
      date: "April 2026",
    },
  },
  {
    id: 3,
    name: "Khalid M.",
    rating: 5,
    text: "e-Foil in Dubai was the highlight of our holiday. Instructor had us flying in 10 minutes. The Marina views while gliding above the water are unforgettable.",
    date: "March 2026",
  },
  {
    id: 4,
    name: "The Al-Hassan Family",
    rating: 5,
    text: "Private family dive was exactly what we wanted. Kids did their first bubbles and the instructor was patient and fun. Highly recommend for families visiting Fujairah.",
    date: "February 2026",
    reply: {
      text: "The kids were absolutely amazing in the water. We love hosting families. Come back anytime for the advanced dives!",
      date: "February 2026",
    },
  },
];

export default function ReviewsSection() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [formName, setFormName] = useState("");
  const [formText, setFormText] = useState("");
  const [formRating, setFormRating] = useState(5);
  const [replyingTo, setReplyingTo] = useState<number | null>(null);
  const [replyText, setReplyText] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("pmak_reviews");
    if (stored) {
      try {
        setReviews(JSON.parse(stored));
      } catch {
        setReviews(INITIAL_REVIEWS);
      }
    } else {
      setReviews(INITIAL_REVIEWS);
    }
  }, []);

  useEffect(() => {
    if (reviews.length > 0) {
      localStorage.setItem("pmak_reviews", JSON.stringify(reviews));
    }
  }, [reviews]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName.trim() || !formText.trim()) return;
    const newReview: Review = {
      id: Date.now(),
      name: formName.trim(),
      rating: formRating,
      text: formText.trim(),
      date: new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" }),
    };
    setReviews((prev) => [newReview, ...prev]);
    setFormName("");
    setFormText("");
    setFormRating(5);
    setShowForm(false);
  };

  const handleReplySubmit = (e: React.FormEvent, reviewId: number) => {
    e.preventDefault();
    if (!replyText.trim()) return;
    setReviews((prev) =>
      prev.map((r) =>
        r.id === reviewId
          ? {
              ...r,
              reply: {
                text: replyText.trim(),
                date: new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" }),
              },
            }
          : r
      )
    );
    setReplyText("");
    setReplyingTo(null);
  };

  const deleteReply = (reviewId: number) => {
    setReviews((prev) =>
      prev.map((r) => (r.id === reviewId ? { ...r, reply: undefined } : r))
    );
  };

  return (
    <section className="w-full bg-[#FAFAF7] py-20 md:py-28 lg:py-32 px-6 md:px-10 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12 md:mb-16">
          <div>
            <p className="text-stone-400 text-xs md:text-sm tracking-[0.2em] uppercase mb-4 font-['DM_Sans']">
              Real Stories
            </p>
            <h2 className="font-['Playfair_Display'] text-stone-900 text-4xl md:text-5xl leading-tight">
              What Our Divers Say
            </h2>
          </div>
          <button
            onClick={() => setShowForm(!showForm)}
            className="px-6 py-2.5 bg-stone-900 text-white rounded-full text-sm font-medium hover:bg-stone-700 transition-colors whitespace-nowrap"
          >
            {showForm ? "Cancel" : "Write a Review"}
          </button>
        </div>

        {showForm && (
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-6 md:p-8 mb-10 md:mb-14 max-w-2xl"
          >
            <h3 className="font-['Playfair_Display'] text-stone-900 text-xl mb-5">
              Share Your Experience
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-stone-700 text-sm font-medium mb-1.5">Name</label>
                <input
                  type="text"
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  required
                  className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-800 focus:outline-none focus:border-stone-400 transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-stone-700 text-sm font-medium mb-1.5">Rating</label>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setFormRating(star)}
                      className="w-8 h-8 flex items-center justify-center text-lg transition-colors"
                    >
                      <i
                        className={`${
                          star <= formRating ? "ri-star-fill text-amber-400" : "ri-star-line text-stone-300"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-stone-700 text-sm font-medium mb-1.5">Your Review</label>
                <textarea
                  value={formText}
                  onChange={(e) => setFormText(e.target.value)}
                  required
                  rows={4}
                  maxLength={500}
                  className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-800 focus:outline-none focus:border-stone-400 transition-colors resize-none"
                  placeholder="Tell us about your dive or e-Foil experience..."
                />
                <p className="text-stone-400 text-xs mt-1">{formText.length}/500</p>
              </div>
              <button
                type="submit"
                className="px-6 py-3 bg-stone-900 text-white rounded-full text-sm font-semibold hover:bg-stone-700 transition-colors whitespace-nowrap"
              >
                Submit Review
              </button>
            </div>
          </form>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {reviews.slice(0, 6).map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl p-6 md:p-7 flex flex-col"
            >
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <i
                    key={i}
                    className={`${
                      i < review.rating ? "ri-star-fill text-amber-400" : "ri-star-line text-stone-200"
                    } text-sm`}
                  />
                ))}
              </div>
              <p className="text-stone-700 text-sm md:text-base leading-relaxed font-['DM_Sans'] font-light flex-1 mb-4">
                {review.text}
              </p>

              {review.reply && (
                <div className="mb-4 bg-stone-50 rounded-xl p-4 border-l-[3px] border-stone-400">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 bg-stone-900 rounded-full flex items-center justify-center">
                      <i className="ri-ship-line text-white text-xs" />
                    </div>
                    <span className="text-stone-900 text-xs font-semibold">PMAK Ocean Hub</span>
                    <span className="text-stone-400 text-xs">{review.reply.date}</span>
                  </div>
                  <p className="text-stone-600 text-sm leading-relaxed font-['DM_Sans'] font-light">
                    {review.reply.text}
                  </p>
                  <button
                    onClick={() => deleteReply(review.id)}
                    className="text-stone-400 text-xs mt-2 hover:text-red-500 transition-colors"
                  >
                    Delete reply
                  </button>
                </div>
              )}

              <div className="flex items-center justify-between pt-4 border-t border-stone-100">
                <span className="text-stone-900 text-sm font-medium">{review.name}</span>
                <div className="flex items-center gap-3">
                  <span className="text-stone-400 text-xs font-['DM_Sans']">{review.date}</span>
                  {!review.reply && (
                    <button
                      onClick={() => {
                        setReplyingTo(review.id);
                        setReplyText("");
                      }}
                      className="text-stone-500 text-xs hover:text-stone-900 transition-colors font-medium"
                    >
                      Reply as PMAK
                    </button>
                  )}
                </div>
              </div>

              {replyingTo === review.id && (
                <form
                  onSubmit={(e) => handleReplySubmit(e, review.id)}
                  className="mt-4 pt-4 border-t border-stone-100"
                >
                  <label className="block text-stone-700 text-xs font-medium mb-1.5">
                    Reply as PMAK Ocean Hub
                  </label>
                  <textarea
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                    required
                    rows={3}
                    maxLength={300}
                    className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-800 focus:outline-none focus:border-stone-400 transition-colors resize-none mb-3"
                    placeholder="Write a warm reply to this guest..."
                  />
                  <div className="flex items-center gap-2">
                    <button
                      type="submit"
                      className="px-4 py-2 bg-stone-900 text-white rounded-full text-xs font-medium hover:bg-stone-700 transition-colors whitespace-nowrap"
                    >
                      Post Reply
                    </button>
                    <button
                      type="button"
                      onClick={() => setReplyingTo(null)}
                      className="px-4 py-2 text-stone-500 text-xs hover:text-stone-900 transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}