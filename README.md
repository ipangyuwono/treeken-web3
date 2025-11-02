# 🌿 Treeken — Reforesting the Future with Web3

**Treeken** adalah platform berbasis **Web3** yang menghubungkan aksi nyata untuk keberlanjutan lingkungan dengan teknologi blockchain.
Melalui Treeken, setiap kontribusi seperti menanam pohon, mendukung proyek hijau, atau berdonasi tercatat secara **transparan, aman, dan dapat diverifikasi** oleh siapa pun melalui blockchain Algorand.

Kami percaya bahwa masa depan hijau dapat dibangun melalui kolaborasi antara komunitas global dan teknologi desentralisasi.

---

## 🌍 Visi

Menjadikan teknologi Web3 sebagai sarana untuk mendorong aksi nyata terhadap pelestarian bumi — di mana setiap individu memiliki bukti digital dari kontribusinya terhadap alam.

---

## 🚀 Fitur Utama

### 🌱 1. NFT Tree Ownership

Setiap pohon yang ditanam direpresentasikan sebagai **NFT unik** di blockchain. Pemilik dapat melacak status, aktivitas penyiraman, dan riwayat kepemilikan pohon tersebut.

### 💧 2. Smart Contract TreeToken

Treeken menggunakan smart contract **TreeToken**, dibangun menggunakan **Algorand Python SDK (Algopy)** untuk mengelola logika pohon digital.

#### 📜 Fitur Smart Contract (`contract.py`):

```python
class TreeToken(ARC4Contract):
    def plant_tree(self): 
        # Menanam pohon baru oleh creator
        ...
    def water_tree(self):
        # Menyiram pohon yang sudah ditanam
        ...
    def list_for_sale(self, price):
        # Menjual pohon dengan harga tertentu
        ...
    def buy_tree(self, buyer, payment):
        # Membeli pohon yang dijual
        ...
```

#### 🧠 Penjelasan:

* **`plant_tree()`** — Hanya pemilik kontrak yang dapat menanam pohon baru.
* **`water_tree()`** — Menyiram pohon dan memperbarui timestamp terakhir penyiraman.
* **`list_for_sale(price)`** — Menandai pohon untuk dijual dengan harga tertentu (microAlgos).
* **`buy_tree(buyer, payment)`** — Mengalihkan kepemilikan pohon ke pembeli yang membayar harga yang sesuai.
* **`get_last_watered()`** & **`get_owner()`** — Fungsi *readonly* untuk mendapatkan data status pohon.

Smart contract ini memastikan bahwa setiap aktivitas (tanam, siram, jual-beli) dicatat di blockchain secara **terdesentralisasi** dan **transparan**.

---

## 🪙 Token & Ekosistem

* **Treeken Token (TKN)** digunakan untuk:

  * Transaksi dan donasi lingkungan
  * Reward bagi pengguna aktif
  * Voting pada sistem **DAO**

---

## 🧩 Teknologi yang Digunakan

| Kategori           | Teknologi                        |
| ------------------ | -------------------------------- |
| Smart Contract     | Algopy (Algorand ARC-4), PyTEAL  |
| Blockchain         | Algorand                         |
| Frontend           | Next.js, TailwindCSS, TypeScript |
| Backend & Storage  | Supabase, IPFS                   |
| Wallet Integration | Pera Wallet, WalletConnect       |

---

## ⚙️ Instalasi

```bash
# Clone repositori
git clone https://github.com/username/treeken.git

# Masuk ke folder proyek
cd treeken

# Install dependencies frontend
npm install

# Jalankan aplikasi lokal
npm run dev
```

Akses di: [http://localhost:3000](http://localhost:3000)

---

## 📈 Roadmap

* [x] Smart Contract TreeToken (Algorand ARC4)
* [x] MVP Platform Web3
* [ ] Integrasi NFT Tree di Frontend
* [ ] Token Launch (TKN)
* [ ] DAO Governance
* [ ] Global Green Partnership Program
