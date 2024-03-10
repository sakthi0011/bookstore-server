import userModels from "../models/BookModel.js";
const createBook = async (req, res) => {
  try {
    const { title, author, publishYear } = req.body;
    const newbook = new userModels({
      title,
      author,
      publishYear,
    });
    await newbook.save();

    res
      .status(200)
      .json({ sucess: true, Message: "book created sucessfully ", newbook });
    console.log(newbook);
  } catch (error) {
    console.log(error);
    res.status(500).json({ sucess: false, Message: "internal server error" });
  }
};

const getBooks = async (req, res) => {
  try {
    const books = await userModels.find();
    if (!books || books.length == 0) {
      return res.status(404).json({ Message: "no books " });
    }
    res.status(200).json({
      sucess: true,
      Message: "books",
      Count: books.length,
      data: books,
    });
    console.log(users);
  } catch (error) {
    return res.status(500).json({ Message: "internal server error" });
  }
};
// get onebook from databast by using id
const getBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await userModels.findById(id);
    if (!book || book.length == 0) {
      return res.status(404).json({ Message: "no book " });
    }
    res.status(200).json({
      sucess: true,
      Message: "book",

      data: book,
    });
    console.log(users);
  } catch (error) {
    return res.status(500).json({ Message: "internal server error" });
  }
};

//update book by using id
const UpdateBook = async (req, res) => {
  try {
    // const { id } = req.params.id;

    const updateBook = await userModels.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    if (!updateBook) {
      return res
        .status(404)
        .json({ Message: "no book exit in this id to update " });
    }
    res
      .status(200)
      .json({ sucess: true, Message: " book updated Sucessfully", updateBook });
  } catch (error) {
    res.status(500).json({ Message: "internal server errro" });
  }
};
const Deletebook = async (req, res) => {
  try {
    const { UserId } = req.params;
    const deletebook = await userModels.findByIdAndDelete(UserId);
    if (!deletebook || deletebook.length == 0) {
      return res
        .status(404)
        .json({ Message: "noo book exits in this id to delete" });
    }
    res
      .status(200)
      .json({ sucess: true, Message: "book deleted Sucessfully", deletebook });
  } catch (error) {
    res.status(500).json({ Message: "internal server error" });
  }
};
export { createBook, getBooks, getBook, UpdateBook, Deletebook };
