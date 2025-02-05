
function ResultByState() {
    const footerData = [
        {
            linksData: [
                { title: 'About' },
                { title: 'Newsroom' },
                { title: 'Diversity' },
                { title: 'Careers' },
                { title: 'Media' },
                { title: 'WP Creative' },
                { title: 'Accessibility' },
                { title: 'Obi..' },
                { title: 'Weather' },
            ],
        },
        {
            linksData: [
                { title: 'Trending' },
                { title: 'Politics' },
                { title: 'Elections' },
                { title: 'Opinions' },
                { title: 'National' },
                { title: 'World' },
                { title: 'Style' },
                { title: 'Sports' },
                { title: 'Business' },
            ],
        },
        {
            linksData: [
                { title: 'Become' },
                { title: 'Subscriptions' },
                { title: 'Mobile' },
                { title: 'Newsletters' },
                { title: 'Washington' },
                { title: 'Reprints' },
                { title: 'Post Store' },
                { title: 'Books' },
                { title: 'Print Special' },
            ],
        },
        {
            linksData: [
                { title: 'Contact' },
                { title: 'Contact' },
                { title: 'Opinions Team' },
                { title: 'Advertise' },
                { title: 'Licensing' },
                { title: 'Correction' },
                { title: 'News Tip' },
                { title: 'Vulnerability' },
                { title: 'Licensing' },
            ],
        },
    ];

    return (
        <div className="container mx-auto mt-4">
            <div className="text-xl font-bold pb-5">
                <p>Results by state</p>
            </div>

            <div className="grid grid-cols-4">
                {footerData.map((data, i) => (
                    <div key={i} className="col-span-2 md:col-span-1">
                        {data.linksData.map((sub, i) => (
                            <div key={i} className="">
                                <p className="pb-1 font-medium">{sub.title}</p>
                            </div> 
                        ))}
                    </div> 
                ))}
            </div>

        </div>
    );
}

export default ResultByState;

