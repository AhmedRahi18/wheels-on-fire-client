const Blogs = () => {
  return (
    <div className="bg-gray-200 p-16 pb-20 pt-0 rounded">
      <h2 className="text-5xl font-bold text-black pt-16 pb-10  text-center">
        Some Important Question Answers
      </h2>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border
         border-base-300 bg-base-100 rounded-box mb-3">
        <div className="collapse-title text-2xl font-semibold">
        What is an access token and refresh token? 
        How do they work and where should we store them on the client-side?
        </div>
        <div className="collapse-content">
          <p>An access token is a short-lived credential for accessing protected resources, while a refresh token is a long-lived credential used to obtain new access tokens when they expire.Access token is used to authenticate requests, while refresh token obtains new access tokens when they expire. They should be securely stored on the client-side, typically in secure storage mechanisms like cookies or local storage.</p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border
         border-base-300 bg-base-100 rounded-box mb-3">
        <div className="collapse-title text-2xl font-semibold">
        Compare SQL and NoSQL databases?
        </div>
        <div className="collapse-content">
          <p>
SQL databases are relational, use structured schemas, and ensure ACID properties. NoSQL databases are non-relational, schema-less, and offer flexible data models, allowing horizontal scalability and eventual consistency..</p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border
         border-base-300 bg-base-100 rounded-box mb-3">
        <div className="collapse-title text-2xl font-semibold">
        What is express js? What is Nest JS?
        </div>
        <div className="collapse-content">
          <p>Express.js is a lightweight web application framework for Node.js, enabling developers to build APIs and handle HTTP requests efficiently. NestJS is a scalable and modular Node.js framework that uses TypeScript, leveraging decorators and dependency injection to create maintainable and scalable server-side applications inspired by Angulars architecture.</p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border
         border-base-300 bg-base-100 rounded-box mb-3">
        <div className="collapse-title text-2xl font-semibold">
        What is MongoDB aggregate and how does it work?
        </div>
        <div className="collapse-content">
          <p>MongoDB aggregate is a powerful framework for performing data aggregation operations, such as grouping, filtering, and transforming data within a MongoDB collection. It utilizes a pipeline approach, where data flows through multiple stages, allowing for complex transformations and calculations to be applied efficiently, providing aggregated results.</p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
