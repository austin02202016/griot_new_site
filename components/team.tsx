// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// export function Team() {
//   return (
//     <section id="team" className="py-16 md:py-24 lg:py-32">
//       <div className="container mx-auto px-4 md:px-6">
//         <h2 className="text-3xl md:text-5xl font-fraunces text-white mb-12 text-center">
//           The Voices Behind Your Voice
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
//           <TeamMember
//             name="Austin Kennedy"
//             role="Co-founder, Fulfillment"
//             image="/professional-man-headshot.png"
//             bio="Grew Proof of Concept to over 8.5M views on Instagram. Produces content for 8M Followers across all accounts."
//           />

//           <TeamMember
//             name="Tommy Potter"
//             role="Co-founder, Account Executive"
//             image="/professional-man-headshot.png"
//             bio="A wordsmith extraordinaire with an uncanny ability to ask the right questions. Head of Power Hour - CIA for entrepreneurship."
//           />
//         </div>
//       </div>
//     </section>
//   )
// }

// function TeamMember({
//   name,
//   role,
//   image,
//   bio,
// }: {
//   name: string
//   role: string
//   image: string
//   bio: string
// }) {
//   return (
//     <div className="flex flex-col items-center text-center">
//       <Avatar className="w-40 h-40 md:w-48 md:h-48 border-2 border-gray-800">
//         <AvatarImage src={image || "/placeholder.svg"} alt={name} />
//         <AvatarFallback className="bg-gray-800 text-white text-4xl">
//           {name
//             .split(" ")
//             .map((n) => n[0])
//             .join("")}
//         </AvatarFallback>
//       </Avatar>
//       <h3 className="text-2xl font-fraunces text-white mt-6 mb-2">{name}</h3>
//       <p className="text-gray-400 mb-4">{role}</p>
//       <p className="text-gray-300">{bio}</p>
//     </div>
//   )
// }
