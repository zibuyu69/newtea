let way = "";

if (process.env.NODE_ENV === "production") {
  way = "";
} else if (process.env.NODE_ENV === "development") {
  way = "";
}

export const myBaseURL = way; // datawh
