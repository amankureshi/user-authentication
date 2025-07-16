import React from "react";

const BASE_URL = "https://dummyjson.com";

export async function loginRequest({ username, password }) {
  const res = await axois.post(`${BASE_URL}/auth/login`, {
    username,
    password,
  });
  return res.data;
}
