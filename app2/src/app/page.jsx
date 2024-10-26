import Image from  "next/image";
import Link from "next/link";
function Home(){
    return (
        <div>
            <Image 
            src="/flower.jpg"
            alt="A beautiful Flower"
            width={400}
            height={600}
            quality={75}
            priority />
        </div>
        //<Link href = "/about"> About Us Page</Link>
    );
}

export default Home;