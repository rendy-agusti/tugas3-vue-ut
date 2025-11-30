export async function getBahanAjar() {
  try {
    const response = await fetch('../data/dataBahanAjar.json')

    if (!response.ok) {
      throw new Error('Gagal memuat JSON');
    }

    return await response.json();
  } catch (err) {
    console.error('FETCH ERROR:', err);
    throw err;
  }
}
