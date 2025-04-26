exports.paginate = (page, limit) => {
    const adjustedLimit = parseInt(limit) || 10;
    const offset = ((parseInt(page) - 1) * adjustedLimit) || 0;
    return { offset, adjustedLimit };
  };