import SuperAdmins from '../models/Super-admins';

export const editSuperAdmins = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await SuperAdmins.findByIdAndUpdate(id, req.body, { new: true });
    return res.status(200).json({
      message: `Super Admin with ID ${id} edited.`,
      data: result,
      error: false,
    });
  } catch (error) {
    return res.status(400).json({
      message: error,
      data: undefined,
      error: true,
    });
  }
};

export const deletedSuperAdmins = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await SuperAdmins.findByIdAndDelete(id);

    return res.status(200).json({
      message: `Super Admin with ID ${id} deleted.`,
      data: result,
      error: false,
    });
  } catch (error) {
    return res.status(400).json({
      message: error,
      data: undefined,
      error: true,
    });
  }
};