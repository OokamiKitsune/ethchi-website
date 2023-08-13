
export default function ConferenceHero() {
    return (
        <div className="p-8">
            <div className="flex flex-col text-primaryType bg-primaryBackground">
                <div className="p-4 pt-8">
                    <p className="font-bold inline">DATES: </p>
                    Fri 09/15, Sat 09/16, Sun 09/17
                </div>
                <div className="p-4 pt-8">
                    <p className="font-bold inline">LOCATION: </p>
                    <p className="inline">
                        <a className="underline">The M Club </a>
                        - Willis Tower,{' '}  
                        <a className="underline">233 S Wacker Dr, Chicago, IL, 60606 </a>
                        Floors 66 & 67
                    </p>
                </div>
                <div className="p-4 pt-8">
                    <p className="font-bold inline">EVENT SPACE: </p>
                    Conference attendees will have access to the 67th floor on Saturday evening as well as full access to the event across both the 66 and 67 floors throughout the day on Sunday.
                </div>
                <div className="p-4 pt-8">
                    <p className="font-bold inline">EVENT DESCRIPTION: </p>
                    The ETHChicago Hackathon is a three-day builder and creative IRL event where participants compete to win bounties sponsored by our partners. Bounties consist of tying together new technology in the blockchain space, innovating and learning from each other about existing blockchain tools, or solving real-world use cases with the unique properties of decentralized technology.
                </div>
                <div className="p-4 pt-8">
                    While this isn't a strict bounty rule, we encourage bounties relating back to showing demonstratable impace in the Chicago community
                </div>
            </div>
        </div>
    )
}
