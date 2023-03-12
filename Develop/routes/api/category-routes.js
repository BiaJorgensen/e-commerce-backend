const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
try {
  const categories = await Category.findAll({
    include: [{model: Product}],
  });
  res.status(200).json(categories);
} catch (err) {
  res.status(500).json(err);
}
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const categories = await Category.findByPk(req.params.id, {
      include: [{model: Product}],
    });
    if (!categories) {
      res.status(404).json({ message: 'No categories found with that ID'});
      return;
    }
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const newCategory = await Category.create(req.body);
    res.status(200).json(newCategory);
  } catch (err) {
    res.status(400).json(err);
  }

});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  if (!req.body.category_name) {
    res.status(400).json({ message: 'Request body cannot be empty' });
    return;
  }
try {
  const updateCategory = await Category.update(req.body, 
    {
      where: {
        id: req.params.id
      }
    });
    if (!updateCategory) {
      res.status(404).json({ message: 'No category found with that ID' });
      return;
    }
    res.status(200).json('Category name has been updated');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const deleteCategory = await Category.destroy({
        where: {
          id: req.params.id
        }
      });
      if (!deleteCategory) {
        res.status(404).json({ message: 'No category found with that ID' });
        return;
      }
      res.status(200).json('Category has been deleted. Please note, all products under this category have also been deleted!');
    } catch (err) {
      res.status(500).json(err);
    }
});

module.exports = router;
