function ImageGallery() {
    const img1 = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='150'%3E%3Crect width='200' height='150' fill='%23ff6b6b'/%3E%3Ctext x='100' y='80' text-anchor='middle' fill='white' font-size='20'%3EImage 1%3C/text%3E%3C/svg%3E";
    const img2 = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='150'%3E%3Crect width='200' height='150' fill='%234ecdc4'/%3E%3Ctext x='100' y='80' text-anchor='middle' fill='white' font-size='20'%3EImage 2%3C/text%3E%3C/svg%3E";
    const img3 = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='150'%3E%3Crect width='200' height='150' fill='%2345b7d1'/%3E%3Ctext x='100' y='80' text-anchor='middle' fill='white' font-size='20'%3EImage 3%3C/text%3E%3C/svg%3E";

    return (
        <div style={{ display: 'flex', gap: '10px' }}>
            <img src={img1} alt="Первое изображение" width="200" height="150" />
            <img src={img2} alt="Второе изображение" width="200" height="150" />
            <img src={img3} alt="Третье изображение" width="200" height="150" />
        </div>
    );
}

export default ImageGallery;