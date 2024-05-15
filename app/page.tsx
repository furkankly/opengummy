import { Content } from "@/components/content";
import { Footer } from "@/components/footer";
import { Grid } from "@/components/grid";
import { Results } from "@/components/results";
import { Voting } from "@/components/voting";
import { Welcoming } from "@/components/welcoming";

export default async function Home() {
  return (
    <>
      <Welcoming />
      <Grid />
      <Voting />
      <Results />
      <Content />
      <Footer />
    </>
  );
}
