import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer Wl-pIQ1XYLbvNZFN5mJ-JeQXQCmX08sY4gWwGyWAQRJ-pzMkRuRRcWl-N8V0uKzqZgQjqeLUGpgwrjgxX8Iw75VHvtWIWdz4OKN-PPtYxPizGGxC_LDxaadOV38cYHYx',
  },
});
