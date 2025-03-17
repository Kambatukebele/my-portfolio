// WordpressService.js

const API_URL = "https://blog.kambatukebele.com/wp-json/wp/v2/posts";

export const fetchPosts = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();

    // Fetching media and author details for each post
    const postsWithDetails = await Promise.all(
      data.map(async (post) => {
        // Fetch featured media details
        if (post.featured_media) {
          const mediaResponse = await fetch(
            `https://blog.kambatukebele.com/wp-json/wp/v2/media/${post.featured_media}`
          );
          if (!mediaResponse.ok) {
            throw new Error("Media fetch failed");
          }
          const mediaData = await mediaResponse.json();
          post.featured_media_url = mediaData.source_url;
        }

        // Fetch author details
        if (post.author) {
          const authorResponse = await fetch(
            `https://blog.kambatukebele.com/wp-json/wp/v2/users/${post.author}`
          );
          if (!authorResponse.ok) {
            throw new Error("Author fetch failed");
          }
          const authorData = await authorResponse.json();
          post.author_details = {
            name: authorData.name,
            position: authorData.description, // Adjust as per actual author data structure
            image: authorData.avatar_urls?.["96"], // Adjust size as per actual author data structure
          };
        }

        // Reduce excerpt
        const stripTags = (html) => {
          const div = document.createElement("div");
          div.innerHTML = html;
          return div.textContent || div.innerHTML || "";
        };
        if (post.excerpt) {
          post.excerpt.rendered =
            stripTags(post.excerpt.rendered).substring(0, 150) + "...";
        }

        return post;
      })
    );

    return postsWithDetails;
  } catch (error) {
    //console.error("Error fetching posts:", error);
    throw error;
  }
};

// export const fetchSinglePost = async (slug) => {
//   try {
//     const response = await fetch(`${API_URL}?slug=${slug}`);
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     const data = await response.json();
//     if (data.length === 0) {
//       throw new Error("Post not found");
//     }
//     return data[0]; // Assuming we only want the first post with this slug
//   } catch (error) {
//     console.error("Error fetching post:", error);
//     throw error;
//   }
// };

// export const fetchSinglePost = async (id) => {
//   try {
//     const response = await fetch(`${API_URL}/${id}?_embed`);
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     const data = await response.json();
//     const author = data._embedded?.author
//       ? {
//           name: data._embedded.author[0].name,
//           image: data._embedded.author[0].avatar_urls?.["96"],
//           position: data._embedded.author[0].description,
//         }
//       : null;

//     const featured_media = data._embedded?.["wp:featuredmedia"]
//       ? {
//           source_url: data._embedded["wp:featuredmedia"][0].source_url,
//         }
//       : null;

//     return {
//       id: data.id,
//       title: data.title.rendered,
//       content: data.content.rendered,
//       date: data.date,
//       author: author,
//       featured_media: featured_media,
//     };
//   } catch (error) {
//     console.error("Error fetching post:", error);
//     throw error;
//   }
// };

export const fetchSinglePost = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}?_embed`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    //console.error("Error fetching post:", error);
    throw error;
  }
};
