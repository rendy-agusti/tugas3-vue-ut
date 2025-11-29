// public/services/api.js

export async function getBahanAjar() {
  const url = `${window.location.origin}/data/dataBahanAjar.json`;

  console.log("Fetching:", url);

  const res = await fetch(url);

  if (!res.ok) {
    console.error("Status:", res.status);
    throw new Error("Gagal memuat JSON");
  }

  return await res.json();
}
