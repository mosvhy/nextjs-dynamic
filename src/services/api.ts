import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const apiPageDetail = ({params}: any) => {
  if (params.slug === 'favicon.ico') return '';
  return new Promise((resolve) => {
    axios.get(`http://localhost:8001/api/pages/${params.slug}`).then(res => {
      resolve(res.data)
    });
  })
}

export const fetchPages = createAsyncThunk('pages/fetchPages', async () => {
  const response = await axios.get('http://localhost:8001/api/pages');
  return response.data;
});