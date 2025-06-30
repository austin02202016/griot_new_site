// "use client"

// import { useEffect, useRef, useState } from "react"
// import {
//   Twitter,
//   Linkedin,
//   Heart,
//   MessageCircle,
//   Repeat,
//   ThumbsUp,
//   MessageSquare,
//   Share2,
// } from "lucide-react"
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import type { JSX } from "react"

// type SocialPost = {
//   id: string
//   platform: "twitter" | "linkedin"
//   profileName: string
//   username: string
//   profileImage: string
//   content: string
//   metrics: {
//     likes: string
//     comments: string
//     shares: string
//   }
//   color: string
//   imageUrl?: string
// }

// // Top row stories (Twitter posts)
// const topRowPosts: SocialPost[] = [
//   {
//     id: "1",
//     platform: "twitter",
//     profileName: "tommy potter",
//     username: "@tommypotter_",
//     profileImage: "https://x.com/tommypotter_/photo",
//     content:
//       `just rented a $40M house on Lake Michigan\n\ni'm bringing together 20 exceptional builders\n\nan all-expenses-paid retreat:\n- no devices\n- no drinking\n- 72 hours\n\nif you're an engineer, researcher, or founder— DM me to come`,
//     metrics: {
//       likes: "520",
//       comments: "117",
//       shares: "56",
//     },
//     color: "bg-blue-900/20 border-blue-700/30",
//     imageUrl: "https://pbs.twimg.com/media/GnEDw5cXkAAoE7m?format=jpg&name=medium",
//   },
//   {
//     id: "15",
//     platform: "twitter",
//     profileName: "Austin Kennedy",
//     username: "@astnkennedy",
//     profileImage: "https://pbs.twimg.com/profile_images/1760053415795482624/0QnQ0U8A_normal.jpg",
//     content: `Today is my first day in SF\n\nDidn't expect to move here at 21\n\nBut I guess that's life\n\nStay tuned :)`,
//     metrics: {
//       likes: "698",
//       comments: "135",
//       shares: "44",
//     },
//     color: "bg-blue-900/20 border-blue-700/30",
//     imageUrl: "https://pbs.twimg.com/media/GkdBqx0aoAImJda?format=jpg&name=900x900",
//   },
//   {
//     id: "17",
//     platform: "twitter",
//     profileName: "Advay Gupta",
//     username: "@_advay_",
//     profileImage: "https://pbs.twimg.com/profile_images/1729642342327474176/4QwQn2p__normal.jpg",
//     content: `Just experienced the "My First Million Effect"\n\nSomeone mentioned a big opportunity. I had mentioned my competition on a podcast with a lot of listeners\n\nDecided to showcase only`,
//     metrics: {
//       likes: "119",
//       comments: "16",
//       shares: "3",
//     },
//     color: "bg-blue-900/20 border-blue-700/30",
//     imageUrl: "https://pbs.twimg.com/media/GkdBqx0aoAImJda?format=jpg&name=900x900",
//   },
// ]

// // Bottom row stories (LinkedIn posts)
// const bottomRowPosts: SocialPost[] = [
//   {
//     id: "6",
//     platform: "linkedin",
//     profileName: "Michael Chen",
//     username: "VP of Product",
//     profileImage: "/asian-man-professional-headshot.png",
//     content:
//       "Excited to announce my promotion to VP of Product! After championing our flagship product for 3 years, I'm thrilled to take on this new challenge. #CareerMilestone #Leadership",
//     metrics: {
//       likes: "2.8K",
//       comments: "432",
//       shares: "178",
//     },
//     color: "bg-pink-900/20 border-pink-700/30",
//   },
//   {
//     id: "7",
//     platform: "linkedin",
//     profileName: "Revenue Growth Partners",
//     username: "Financial Services",
//     profileImage: "/financial-company-logo.png",
//     content:
//       "We're proud to announce we've crossed the $10M+ annual recurring revenue milestone! Thanks to our clients and team for making this possible. #GrowthMindset #Revenue",
//     metrics: {
//       likes: "1.5K",
//       comments: "267",
//       shares: "342",
//     },
//     color: "bg-emerald-900/20 border-emerald-700/30",
//   },
//   {
//     id: "8",
//     platform: "linkedin",
//     profileName: "HealthTech Solutions",
//     username: "Healthcare Technology",
//     profileImage: "/placeholder.svg?key=qdc1n",
//     content:
//       "After months of rigorous preparation, we're proud to announce that we've achieved HIPAA compliance! This opens up new opportunities to serve healthcare providers. #Healthcare #Compliance",
//     metrics: {
//       likes: "976",
//       comments: "183",
//       shares: "245",
//     },
//     color: "bg-teal-900/20 border-teal-700/30",
//   },
//   {
//     id: "9",
//     platform: "linkedin",
//     profileName: "Venture Capital News",
//     username: "Financial News",
//     profileImage: "/placeholder.svg?key=hu5o2",
//     content:
//       "Breaking: StartupX has secured their Series B funding of $25M led by Sequoia Capital. This comes just 6 months after their Series A round. #VentureCapital #Funding",
//     metrics: {
//       likes: "3.2K",
//       comments: "521",
//       shares: "876",
//     },
//     color: "bg-violet-900/20 border-violet-700/30",
//   },
//   {
//     id: "10",
//     platform: "linkedin",
//     profileName: "Enterprise Solutions",
//     username: "B2B Technology",
//     profileImage: "/placeholder.svg?key=39hwa",
//     content:
//       "We're expanding into the enterprise market! After success in the SMB space, we're now ready to serve larger organizations with our enhanced platform. #Enterprise #B2B",
//     metrics: {
//       likes: "1.1K",
//       comments: "198",
//       shares: "267",
//     },
//     color: "bg-rose-900/20 border-rose-700/30",
//   },
//   {
//     id: "12",
//     platform: "linkedin",
//     profileName: "LinkedIn Analytics",
//     username: "Social Media Insights",
//     profileImage: "/placeholder.svg?key=hxu2m",
//     content:
//       "Congratulations to @techleader for achieving a 15% engagement rate on LinkedIn posts this quarter, well above the industry average of 2%! #SocialMedia #Engagement",
//     metrics: {
//       likes: "765",
//       comments: "124",
//       shares: "231",
//     },
//     color: "bg-blue-900/20 border-blue-700/30",
//   },
//   {
//     id: "16",
//     platform: "linkedin",
//     profileName: "Industry Recognition",
//     username: "Business Awards",
//     profileImage: "/generic-award-logo.png",
//     content:
//       "Proud to announce we've been recognized as an industry leader in the annual Business Excellence Awards! Thank you to our amazing team and clients. #Recognition #Excellence",
//     metrics: {
//       likes: "1.9K",
//       comments: "312",
//       shares: "487",
//     },
//     color: "bg-amber-900/20 border-amber-700/30",
//   },
// ]

// export function FeaturedTweets() {
//   const [scrollPosition1, setScrollPosition1] = useState(0)
//   const [scrollPosition2, setScrollPosition2] = useState(0)

//   const row1Ref = useRef<HTMLDivElement>(null)
//   const row2Ref = useRef<HTMLDivElement>(null)

//   // Duplicate the posts arrays to create seamless loops
//   const allTopRowPosts = [...topRowPosts, ...topRowPosts]
//   const allBottomRowPosts = [...bottomRowPosts, ...bottomRowPosts]

//   useEffect(() => {
//     // Animation for top row (right direction)
//     const animateRow1 = () => {
//       let lastTimestamp1: number

//       const animate1 = (timestamp: number) => {
//         if (!lastTimestamp1) lastTimestamp1 = timestamp
//         const elapsed = timestamp - lastTimestamp1

//         setScrollPosition1((prevPosition) => {
//           // Calculate new position (moving right, so negative value)
//           let newPosition = prevPosition - 0.3 * (elapsed / 16)

//           // Reset position when we've scrolled the width of the original set
//           if (row1Ref.current && Math.abs(newPosition) >= row1Ref.current.scrollWidth / 2) {
//             newPosition = 0
//           }

//           return newPosition
//         })

//         lastTimestamp1 = timestamp
//         animationFrame1 = requestAnimationFrame(animate1)
//       }

//       let animationFrame1 = requestAnimationFrame(animate1)

//       return () => {
//         cancelAnimationFrame(animationFrame1)
//       }
//     }

//     // Animation for bottom row (left direction)
//     const animateRow2 = () => {
//       let lastTimestamp2: number

//       const animate2 = (timestamp: number) => {
//         if (!lastTimestamp2) lastTimestamp2 = timestamp
//         const elapsed = timestamp - lastTimestamp2

//         setScrollPosition2((prevPosition) => {
//           // Calculate new position (moving left, so positive value)
//           let newPosition = prevPosition + 0.4 * (elapsed / 16)

//           // Reset position when we've scrolled the width of the original set
//           if (row2Ref.current && newPosition >= row2Ref.current.scrollWidth / 2) {
//             newPosition = 0
//           }

//           return newPosition
//         })

//         lastTimestamp2 = timestamp
//         animationFrame2 = requestAnimationFrame(animate2)
//       }

//       let animationFrame2 = requestAnimationFrame(animate2)

//       return () => {
//         cancelAnimationFrame(animationFrame2)
//       }
//     }

//     const cleanup1 = animateRow1()
//     const cleanup2 = animateRow2()

//     return () => {
//       cleanup1()
//       cleanup2()
//     }
//   }, [])

//   return (
//     <section id="tweets" className="py-16 md:py-24 lg:py-32 bg-black/30 overflow-hidden">
//       <div className="container mx-auto px-4 md:px-6">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-3xl md:text-5xl font-fraunces text-white mb-12 text-center">Stories We've Amplified</h2>

//           {/* Top Row - Moving Right (negative translation) - Twitter Posts */}
//           <div className="relative mb-12">
//             <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black/90 to-transparent z-10"></div>
//             <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black/90 to-transparent z-10"></div>

//             <div className="overflow-hidden">
//               <div
//                 ref={row1Ref}
//                 className="flex space-x-6 py-4"
//                 style={{
//                   transform: `translateX(${scrollPosition1}px)`,
//                   width: "max-content",
//                 }}
//               >
//                 {allTopRowPosts.map((post, index) => (
//                   <div
//                     key={`top-${post.id}-${index}`}
//                     className="flex-shrink-0 w-80 bg-gray-900/70 backdrop-blur-sm rounded-xl border border-gray-800 overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:border-gray-700"
//                   >
//                     <div className="p-4">
//                       {/* Header with profile info */}
//                       <div className="flex items-center mb-3">
//                         <Avatar className="h-10 w-10 mr-3 border border-gray-700">
//                           <AvatarImage src={post.profileImage || "/placeholder.svg"} alt={post.profileName} />
//                           <AvatarFallback className="bg-gray-800 text-white">
//                             {post.profileName.charAt(0)}
//                           </AvatarFallback>
//                         </Avatar>
//                         <div>
//                           <p className="text-white font-medium text-sm">{post.profileName}</p>
//                           <p className="text-gray-400 text-xs">{post.username}</p>
//                         </div>
//                         {post.platform === "twitter" && <Twitter className="h-4 w-4 text-blue-400 ml-auto" />}
//                       </div>

//                       {/* Post content */}
//                       <p className="text-gray-300 text-sm mb-3 line-clamp-3 whitespace-pre-line">{post.content}</p>

//                       {/* Post image if present */}
//                       {post.imageUrl && (
//                         <img
//                           src={post.imageUrl}
//                           alt="Post visual"
//                           className="w-full h-40 object-cover rounded-lg mb-3 border border-gray-800"
//                         />
//                       )}

//                       {/* Engagement metrics */}
//                       <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-800 text-xs text-gray-400">
//                         <div className="flex items-center gap-1">
//                           <MessageCircle className="h-3.5 w-3.5" />
//                           <span>{post.metrics.comments}</span>
//                         </div>
//                         <div className="flex items-center gap-1">
//                           <Repeat className="h-3.5 w-3.5" />
//                           <span>{post.metrics.shares}</span>
//                         </div>
//                         <div className="flex items-center gap-1">
//                           <Heart className="h-3.5 w-3.5" />
//                           <span>{post.metrics.likes}</span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Bottom Row - Moving Left (positive translation) - LinkedIn Posts */}
//           <div className="relative">
//             <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black/90 to-transparent z-10"></div>
//             <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black/90 to-transparent z-10"></div>

//             <div className="overflow-hidden">
//               <div
//                 ref={row2Ref}
//                 className="flex space-x-6 py-4"
//                 style={{
//                   transform: `translateX(-${scrollPosition2}px)`,
//                   width: "max-content",
//                 }}
//               >
//                 {allBottomRowPosts.map((post, index) => (
//                   <div
//                     key={`bottom-${post.id}-${index}`}
//                     className="flex-shrink-0 w-80 bg-gray-900/70 backdrop-blur-sm rounded-xl border border-gray-800 overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:border-gray-700"
//                   >
//                     <div className="p-4">
//                       {/* Header with profile info */}
//                       <div className="flex items-center mb-3">
//                         <Avatar className="h-10 w-10 mr-3 border border-gray-700">
//                           <AvatarImage src={post.profileImage || "/placeholder.svg"} alt={post.profileName} />
//                           <AvatarFallback className="bg-gray-800 text-white">
//                             {post.profileName.charAt(0)}
//                           </AvatarFallback>
//                         </Avatar>
//                         <div>
//                           <p className="text-white font-medium text-sm">{post.profileName}</p>
//                           <p className="text-gray-400 text-xs">{post.username}</p>
//                         </div>
//                         {post.platform === "linkedin" && <Linkedin className="h-4 w-4 text-blue-500 ml-auto" />}
//                       </div>

//                       {/* Post content */}
//                       <p className="text-gray-300 text-sm mb-3 line-clamp-3 whitespace-pre-line">{post.content}</p>

//                       {/* Post image if present */}
//                       {post.imageUrl && (
//                         <img
//                           src={post.imageUrl}
//                           alt="Post visual"
//                           className="w-full h-40 object-cover rounded-lg mb-3 border border-gray-800"
//                         />
//                       )}

//                       {/* Engagement metrics */}
//                       <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-800 text-xs text-gray-400">
//                         <div className="flex items-center gap-1">
//                           <MessageSquare className="h-3.5 w-3.5" />
//                           <span>{post.metrics.comments}</span>
//                         </div>
//                         <div className="flex items-center gap-1">
//                           <Share2 className="h-3.5 w-3.5" />
//                           <span>{post.metrics.shares}</span>
//                         </div>
//                         <div className="flex items-center gap-1">
//                           <ThumbsUp className="h-3.5 w-3.5" />
//                           <span>{post.metrics.likes}</span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
