// Chuyển đường dẫn gốc ("/a/b/") sang đường dẫn tương đối khi site chạy dưới thư mục con
// (bản xem trước tĩnh đặt data-root trên <html>). Trên domain chính thức, giữ nguyên.
export const href = (path: string) => {
  const root = document.documentElement.dataset.root;
  if (root == null || !path.startsWith('/')) return path;
  return root + path.slice(1).replace(/(^|\/)(\?|#|$)/, '$1index.html$2');
};
