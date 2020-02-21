var warehouse = [];
var goods = [];
var createWarehouse = function (id, volume) {
    if (warehouse.length == 0) {
        warehouse.push({ id: id, volume: volume });
        return warehouse;
    } else {
        for (var i = 0; i < warehouse.length; i++) {
            if (warehouse[i]['id'] == id) {
                console.log('Gudang sudah ada');
                return warehouse;
            } else {
                warehouse.push({ id: id, volume: volume });
                return warehouse;
            }
        }
    }
}

var insertGoods = function (wh, code, qty) {
    if (warehouse.length == 0) {
        console.log('Gudang tidak ditemukan');
    } else {
        for (var i = 0; i < warehouse.length; i++) {
            if (warehouse[i]['id'] == wh) {
                if (warehouse[i]['volume'] < qty) {
                    console.log('Kapasitas gudang sudah penuh');
                    return warehouse;
                } else {
                    if (goods.length == 0) {
                        warehouse[i]['volume'] -= qty;
                        goods.push({ code: code, qty: qty, id: wh });
                        console.log(`Berhasil memasukkan barang ${code} ke dalam gudang ${wh} dengan stok tersedia ${qty}`);
                        return goods;
                    } else {
                        for (var n = 0; n < goods.length; n++) {
                            if (goods[n]['code'] == code) {
                                goods[n]['qty'] += qty;
                                warehouse[i]['volume'] -= qty;
                                console.log(`Berhasil memasukkan barang ${code} ke dalam gudang ${wh} dengan stok tersedia ${goods[n]['qty']}`);
                                return goods;
                            } else {
                                warehouse[i]['volume'] -= qty;
                                goods.push({ code: code, qty: qty, id: wh });
                                console.log(`Berhasil memasukkan barang ${code} ke dalam gudang ${wh} dengan stok tersedia ${qty}`);
                                return goods;
                            }
                        }
                    }
                }
            } else {
                console.log('Gudang tidak ditemukan');
                return warehouse;
            }
        }
    }
}

var getGoods = function (wh, code, qty) {
    if (warehouse.length == 0) {
        console.log('Gudang tidak ditemukan');
        return warehouse;
    } if (goods.length == 0) {
        console.log(`Barang tidak ditemukan dalam gudang ${wh}`);
        return goods;
    } else {
        for (var i = 0; i < warehouse.length; i++) {
            if (warehouse[i]['id'] == wh) {
                status = 0;
                for (var n = 0; n < goods.length; n++) {
                    if (goods[n]['code'] == code) {
                        if (goods[n]['qty'] < qty) {
                            console.log(`jumlah Barang di gudang ${wh} tidak cukup`);
                            return goods;
                        } else {
                            goods[n]['qty'] -= qty;
                            warehouse[i]['volume'] += qty;
                            console.log(`Berhasil mengambil barang ${code} dari gudang ${wh} dengan jumlah ${qty}`);
                            status = 1;
                            return goods;
                        }
                    }
                }
                if (status == 0) {
                    console.log(`Barang tidak ditemukan dalam gudang ${wh}`);
                    return goods;
                }
            } else {
                console.log('Gudang tidak ditemukan');
                return warehouse;
            }
        }
    }

}