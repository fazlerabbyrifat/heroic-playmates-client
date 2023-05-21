import React from "react";

const Blog = () => {
  return (
    <div className="my-10 bg-base-200 px-10 py-10">
      <div className="max-w-5xl mx-auto my-10">
        <h1 className="text-3xl font-bold">
          1. What is an access token and refresh token? How do they work and
          where should we store them on the client-side?
        </h1>
        <p className="text-lg font-medium mt-5">
          <span className="text-xl font-semibold">Access Token:</span> An access
          token is a credential that is issued by an authentication server upon
          successful authentication of a user. It is a string of characters that
          represents the user's identity and is used to gain access to protected
          resources (such as APIs or web services). The access token is
          typically short-lived and has an expiration time associated with it.
          When a user logs in or authenticates with their credentials, the
          server verifies the provided information and generates an access
          token. This token is then included in subsequent requests to the
          server to prove the user's identity and authorization level. <br />
          <span className="text-xl font-semibold"> Refresh Token:</span> A
          refresh token is a long-lived credential that is also issued during
          the authentication process, alongside the access token. While the
          access token is short-lived, the refresh token has a longer lifespan.
          Its purpose is to obtain a new access token once the previous one
          expires, without requiring the user to re-authenticate. When the
          access token expires, the client can make a request to the server
          using the refresh token to obtain a new access token. The server
          verifies the refresh token's validity and issues a fresh access token
          in response. This process allows the user to maintain an active
          session without constantly re-authenticating. <br />
          <span className="text-xl font-semibold">Where to store: </span> The
          access token should be stored securely on the client-side. It should
          not be accessible to unauthorized parties, such as malicious scripts
          or other users of the same device. Commonly, access tokens are stored
          in memory (e.g., a variable) rather than in persistent storage like
          cookies or local storage. By storing it in memory, the token is
          automatically cleared when the browser or application is closed.{" "}
          <br />
          On other hand, Refresh tokens are more sensitive than access tokens
          since they have a longer lifespan and can be used to obtain new access
          tokens. Ideally, refresh tokens should be stored securely on the
          client-side, such as an HTTP-only cookie or encrypted local storage.
          Using HTTP-only cookies helps protect against cross-site scripting
          (XSS) attacks since JavaScript cannot access them directly.
        </p>
      </div>
      <div className="max-w-5xl mx-auto my-10">
        <h1 className="text-3xl font-bold">
          2. Compare SQL and NoSQL databases?
        </h1>
        <p className="text-lg font-medium mt-5">
          SQL (Structured Query Language) and NoSQL (Not Only SQL) are two
          different types of database management systems. Here's a comparison
          between the two: <br />
          1.Data Model: SQL databases follow a rigid, structured data model
          based on tables with predefined schemas otherwise NoSQL databases
          offer a more flexible data model. They can be document-based,
          key-value pairs, column-oriented, or graph-based. <br />
          2.Scalability: SQL databases are typically vertically scalable,
          meaning they can handle increased load by adding more resources to a
          single server, such as CPU, memory, or storage. On other hand, NoSQL
          databases are designed to be horizontally scalable, allowing you to
          distribute data across multiple servers or clusters. This approach
          enables better scalability for handling large amounts of data and high
          traffic loads. <br />
          3.Query Language: SQL databases use the structured query language
          (SQL) for querying and manipulating data. NoSQL databases may have
          their own query languages, specific APIs, or use simpler query
          mechanisms. The querying capabilities may vary depending on the type
          of NoSQL database. <br />
          4.Use Cases: SQL databases are well-suited for applications that
          require complex querying, transactions, and strong consistency, such
          as financial systems, e-commerce platforms, and relational data. NoSQL
          databases excel in handling large volumes of unstructured or
          semi-structured data, real-time applications, content management
          systems, and scenarios that demand high scalability and flexibility.
        </p>
      </div>
      <div className="max-w-5xl mx-auto my-10">
        <h1 className="text-3xl font-bold">
          3. What is express js? What is Nest JS?
        </h1>
        <p className="text-lg font-medium mt-5">
          <span className="text-xl font-semibold">Express Js:</span> Express.js
          is a minimalistic and flexible web application framework for Node.js.
          It provides a simple and intuitive API for building web servers and
          handling HTTP requests and responses. Express.js is known for its
          lightweight nature and unopinionated design, allowing developers to
          have more control and flexibility in structuring their applications.{" "}
          <br />
          <span className="text-xl font-semibold">Nest.js: </span> Nest.js is a
          progressive, opinionated, and full-featured framework for building
          scalable and maintainable server-side applications. It is built on top
          of Express.js and leverages TypeScript, a typed superset of
          JavaScript, which adds static typing and additional features to the
          language.{" "}
        </p>
      </div>
      <div className="max-w-5xl mx-auto my-10">
        <h1 className="text-3xl font-bold">
          4. What is MongoDB aggregate and how does it work?
        </h1>
        <p className="text-lg font-medium mt-5">
          In MongoDB, the aggregate method is used to perform advanced data
          aggregation operations on the collections. It allows you to process
          and transform the documents in a collection using a pipeline of
          stages. Each stage in the pipeline performs a specific operation on
          the input documents and passes the results to the next stage. <br />
          <span className="text-xl font-semibold">Working Procedure:</span>{" "}
          <br />
          1. $match: Filters the documents in the collection based on specified
          criteria. <br />
          2.$group: Groups documents together based on a specified key and
          performs aggregations on grouped data. <br />
          3.$sort: Sorts the documents based on one or more fields. <br />
          4. $limit and $skip: Limits the number of documents returned or skips
          a certain number of documents.
        </p>
      </div>
    </div>
  );
};

export default Blog;
