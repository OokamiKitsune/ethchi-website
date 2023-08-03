import VideoBackground from "./elements/videoBackground/VideoBackground"
import Accordion from "../../components/accordion/Accordion"

export default function Home() {
    return (
        <>
        <div className="w-full bg-primaryBackground">

            {/* video bacground */}
            <div>
                <VideoBackground videoId='jfKfPfyJRdk'/>
            </div>


            {/* FAQ section */}
            <div className="p-10">
                <h1 className="text-center font-mono font-bold text-4xl text-primaryType mb-4">FAQ</h1> 

                <div className="flex flex-col justify-evenly space-y-4 items-center">
                    <Accordion label="WHAT IS ETHCHICAGO?">
                        <p>ETHChicago is a 3 day blkj  asdlfksa s dfslf as fdlsakdjfs laalskdjf</p>
                    </Accordion>
                    <Accordion label="HOW CAN I ATTEND ETHCHICAGO?">
                        <p>ETHChicago is a 3 day blkj  asdlfksa s dfslf as fdlsakdjfs laalskdjf</p>
                    </Accordion>
                    <Accordion label="HOW CAN I ATTEND ETHCHICAGO?">
                        <p>ETHChicago is a 3 day blkj  asdlfksa s dfslf as fdlsakdjfs laalskdjf</p>
                    </Accordion>
                    <Accordion label="HOW CAN I ATTEND ETHCHICAGO?">
                        <p>ETHChicago is a 3 day blkj  asdlfksa s dfslf as fdlsakdjfs laalskdjf</p>
                    </Accordion>
                </div>
            </div>

            {/* Partners sections */}
            <div className="p-10">
                <h1 className="text-center font-mono font-bold text-4xl text-primaryType mb-4">PARTNERS</h1> 
            </div>
            
        </div>
        </>
    )
}
