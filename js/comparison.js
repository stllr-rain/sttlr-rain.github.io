data.sort((a, b) => new Date(b.tanggal.split('-').reverse().join('-')) - new Date(a.tanggal.split('-').reverse().join('-')));