import HeroSub from "@/components/SharedComponent/HeroSub";
import NotFound from "@/components/NotFound";
import { Metadata } from "next";
import heroBg from "../../public/images/hero/hero-img.jpg";

export const metadata: Metadata = {
  title: "404 Page | Venus ",
};

const ErrorPage = () => {
  return (
    <>
      <HeroSub
        highlight="> 404"
        title="404 Page Not Found"
        description="We Can't Seem to Find The Page You're Looking For."
      image={heroBg}
    />
    <NotFound />
  </>
)
}

export default ErrorPage;
