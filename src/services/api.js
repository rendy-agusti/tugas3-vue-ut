export async function getBahanAjar() {
  const res = await fetch('/data/dataBahanAjar.json');
  if (!res.ok) throw new Error('Gagal memuat JSON');
  return await res.json();
}
