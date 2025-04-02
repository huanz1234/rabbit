import httpInstance from "@/utils/http";

export default function getCategoryAPI(id) {

  return httpInstance.get("/category", {
    params: {
      id
    }
  })
}