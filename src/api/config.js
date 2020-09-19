let way = "";

if (process.env.NODE_ENV === "production") {
  way = "http://122.114.0.26:8090/";
} else if (process.env.NODE_ENV === "development") {
  way = "http://122.114.0.26:8090/";
}

export const myBaseURL = way; // datawh
