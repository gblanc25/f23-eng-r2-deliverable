import type { Database } from "@/lib/schema";
import Image from "next/image";
import DetailedView from "./card-detailed";
type Species = Database["public"]["Tables"]["species"]["Row"];

<<<<<<< HEAD
const supabase = createServerSupabaseClient();
const {
  data: { session },
} = await supabase.auth.getSession();

if (!session) {
  // this is a protected route - only users who are signed in can view this route
  redirect("/");
}

const id = session.user.id ? session.user.id : null;

=======
>>>>>>> parent of 23cdc5b... good progress
export default function SpeciesCard(species: Species) {
  return (
    <div className="min-w-72 m-4 w-72 flex-none rounded border-2 p-3 shadow">
      {species.image && (
        <div className="relative h-40 w-full">
          <Image src={species.image} alt={species.scientific_name} fill style={{ objectFit: "cover" }} />
        </div>
      )}
      <h3 className="mt-3 text-2xl font-semibold">{species.common_name}</h3>
      <h4 className="text-lg font-light italic">{species.scientific_name}</h4>
      <p>{species.description ? species.description.slice(0, 150).trim() + "..." : ""}</p>
      {/* Replace with detailed view */}
<<<<<<< HEAD
      <DetailedView species={species} /> {species.author == id && <EditSpecies species={species} />}
=======
      <DetailedView species={species} />
>>>>>>> parent of 23cdc5b... good progress
    </div>
  );
}
