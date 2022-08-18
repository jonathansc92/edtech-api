module.exports = {
    getPagingData(data, page, limit) {
        const { count: totalItems, rows: content } = data;
        const currentPage = page ? + page : 0;
        const totalPages = Math.ceil(totalItems / limit);
        return { totalItems, content, totalPages, currentPage };
      },

    getPagination(page = 1, size = 10) {
        const limit = size ? +size : 3;
        const offset = page ? page * limit : 1;
        return { limit, offset };
      }
}