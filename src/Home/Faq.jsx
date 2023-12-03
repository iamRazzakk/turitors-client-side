

const Faq = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold text-center ">FAQ</h1>
            <div className="bg-white text-black rounded-xl md:mt-10">

                <div className="collapse ">
                    <input type="radio" name="my-accordion-1" checked="checked" />
                    <div className="collapse-title text-xl font-medium">
                        What is tanstack query?
                    </div>
                    <div className="collapse-content">
                        <p>TanStack Query (FKA React Query) is often described as the missing data-fetching library for web applications, but in more technical terms, it makes fetching, caching, synchronizing and updating server state in your web applications a breeze.</p>
                    </div>
                </div>
                <div className="collapse ">
                    <input type="radio" name="my-accordion-1" />
                    <div className="collapse-title text-xl font-medium">
                        Why use tanstack query?
                    </div>
                    <div className="collapse-content">
                        <p>TanStack Query gives you declarative, always-up-to-date auto-managed queries and mutations that directly improve both your developer and user experiences.</p>
                    </div>
                </div>
                <div className="collapse ">
                    <input type="radio" name="my-accordion-1" />
                    <div className="collapse-title text-xl font-medium">
                        Difference between useeffect and tanstack query?
                    </div>
                    <div className="collapse-content">
                        <p>The TanStack Query library provides a clear and consistent way to handle errors. Compared to the useEffect hook, handling the JavaScript errors with the TanStack Query library is easy. The library also retries failed HTTP requests automatically. This reduces the need for manual intervention from the developer.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;