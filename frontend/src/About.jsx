import { AppInfo } from './jsonData/AppInfo';
import './AppInfo.css'
 const About = () => {
    const{appInfo , setAppinfo } = AppInfo()

    // useEffect(() => {
    //     const fetchInformation = async () => {
    //         try {
    //             const response = await fetch('/src/jsonData/app-info.json');
    //             if (!response.ok) {
    //                 throw new Error('Failed to fetch app info');
    //             }
    //             const data = await response.json()
    //             setAppInfo(data);
    //         } catch (error) {
    //             setError(`Error fetching app info: ${error.message}`);
    //         }
    //     };
    //     fetchInformation();
    // }, []);

    return (
        <main className="About" style={{ marginTop: '3rem' }}>
            {appInfo && (
                <>
                    <section class = "description_sec">
                        <h2>{appInfo.introduction.title}</h2>
                        <p>{appInfo.introduction.description}</p>
                    </section>

                    <section className="feature_sec">
                        <h2>{appInfo.features.title}</h2>
                        <ul>
                            {appInfo.features.items.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>
                    </section>

                    <section className = "tech_sec">
                        <h2>{appInfo.technologies.title}</h2>
                        <ul>
                            {appInfo.technologies.items.map((tech, index) => (
                                <li key={index}>{tech}</li>
                            ))}
                        </ul>
                    </section>

                    <section className = "contact_sec">
                        <h2>{appInfo.contact.title}</h2>
                        <p>{appInfo.contact.description}</p>
                        <p>Email: {appInfo.contact.email}</p>
                        <p>
                            Github:{' '}
                            <a href={appInfo.contact.github} target="_blank" rel="noopener noreferrer">
                                {appInfo.contact.github}
                            </a>
                        </p>
                    </section>
                </>
            )}
        </main>
    );
};
export default About;