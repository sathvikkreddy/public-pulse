import axios from "axios";
import cheerio from "cheerio";

export default async function getReviews(url) {
  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    const reviews = [];

    $('p[class*="comment"]').each((index, element) => {
      reviews.push($(element).text());
    });

    return reviews;
  } catch (error) {
    console.error("Error fetching reviews:", error.message);
    return [];
  }
}
