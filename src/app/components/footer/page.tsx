import Image from "next/image";
import testimonial from "../../../../public/testimonials.png";
import footer from "../../../../public/footer.png";

export default function Footer(){
    return(
       <> <div className="mt-14" >
        <Image
          src={testimonial}
          alt="testimonials"
          width={1400}
          height={100}
        />
      </div>
      <div>
        <Image src={footer} alt="footer" width={1400} height={320} />
      </div>
      </>
    );
}