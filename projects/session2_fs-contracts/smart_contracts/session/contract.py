# contract.py
from algopy import ARC4Contract, String, UInt64, Global, Txn, Account
from algopy.arc4 import abimethod

class TreeToken(ARC4Contract):
    def __init__(self) -> None:
        # Panggil konstruktor induk untuk inisialisasi ARC4Contract
        self.is_planted = bool(False)
        self.last_watered = UInt64(0)  # Timestamp terakhir disiram
        self.for_sale = bool(False)
        self.price = UInt64(0)

    @abimethod()
    def plant_tree(self) -> String:
        assert Txn.sender == Global.creator_address, "Hanya owner yang bisa menanam pohon"
        assert not self.is_planted, "Pohon sudah ditanam"

        self.is_planted = bool(True)
        self.last_watered = Global.latest_timestamp
        return String("Pohon berhasil ditanam!")

    @abimethod()
    def water_tree(self) -> String:
        assert self.is_planted, "Pohon belum ditanam"

        self.last_watered = Global.latest_timestamp
        return String("Pohon telah disiram!")

    @abimethod(readonly=True)
    def get_last_watered(self) -> UInt64:
        return self.last_watered

    @abimethod()
    def list_for_sale(self, price: UInt64) -> String:
        assert Txn.sender == Global.creator_address, "Hanya owner yang bisa menjual"
        self.for_sale = bool(True)
        self.price = price
        return String("Pohon dijual dengan harga {price} microAlgos")

    @abimethod()
    def buy_tree(self, buyer: Account, payment: UInt64) -> String:
        assert self.for_sale, "Pohon tidak dijual"
        assert payment >= self.price, "Pembayaran tidak cukup"


        self.for_sale = bool(False)
        self.price = UInt64(0)
        return String("Kepemilikan pohon berpindah!")

    @abimethod(readonly=True)
    def get_owner(self) -> Account:
        return Global.creator_address
