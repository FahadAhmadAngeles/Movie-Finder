    export async function fetchMovieData(url: string) {
        const options = {
          method: "GET",
          headers: {
          'x-rapidapi-key': '70ac253f68mshd90b1e80fb1dd12p10e94cjsn52e532c9bcc7',
		'x-rapidapi-host': 'streaming-availability.p.rapidapi.com'
          },
        };
      
        try {
          const res = await fetch(url, options);
      
          if (!res.ok) {
            throw new Error(`Fetch failed: ${res.status} ${res.statusText}`);
          }
      
          const json = await res.json();
 
          if (!Array.isArray(json.shows)) {
            console.error("Unexpected API format: shows is not an array");
            return [];
          }
          return json.shows.map((show: any) => ({
            id: show.id,
            originalTitle: show.originalTitle,
            overview: show.overview,
            releaseYear: show.releaseYear,
            poster: show.imageSet?.verticalPoster?.w240 || null
          }));
        } catch (error) {
          console.error(`Error fetching from ${url}:`, error);
          return []; 
        }
      }

      export async function fetchMovieByTitle(title: string) {
        console.log("title received:", title);
        console.log("encoded:", encodeURIComponent(title));
      
        const options = {
          method: "GET",
          headers: {
            "x-rapidapi-key": "70ac253f68mshd90b1e80fb1dd12p10e94cjsn52e532c9bcc7",
            "x-rapidapi-host": "streaming-availability.p.rapidapi.com",
          },
        };
      
        const url = `https://streaming-availability.p.rapidapi.com/shows/search/title?country=ca&title=${encodeURIComponent(
          title
        )}&series_granularity=show&output_language=en`;
      
        console.log("📡 Final fetch URL:", url);
      
        try {
          const res = await fetch(url, options);
          if (!res.ok) {
            throw new Error(`Fetch failed: ${res.status}`);
          }
      
          const json = await res.json();
      
          const first = json.shows?.[0];
          if (!first) return null;
      
          return {
            id: first.id,
            originalTitle: first.originalTitle,
            overview: first.overview,
            releaseYear: first.releaseYear,
            poster: first.imageSet?.verticalPoster?.w240 || null,
          };
        } catch (error) {
          console.error("Error fetching movie by title:", error);
          return null;
        }
      }
      
      