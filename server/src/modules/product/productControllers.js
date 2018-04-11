export const productLoadAll = (req, res) => {
  const product = {
    title: 'Box 456',
    price: 789,
  };

  res.status(200).json(product);
};

export async function productCreate(req, res) {
  console.log(req.body);

  const product = {
    title: 'Box 456',
    price: 789,
    id: req.body.id,
  };

  res.status(200).json(product);
}

export async function productUpdateById(req, res) {
  res.status(200).json('OK productUpdateById');
}

export const productDeleteById = (req, res) => {
  res.status(200).json('OK productDeleteById');
};
