import { useGetAllResourceQuery } from "../../redux/features/Admin Management/getAllResource";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../../components/Loader";
import { useApproveResourceMutation } from "../../redux/features/Admin Management/ApproveResource";
import { useFileDeleteMutation } from "../../redux/features/Admin Management/FileDelete";

export default function ResourceMange() {
  const { data, isLoading } = useGetAllResourceQuery(undefined);
  const [approveResource, { isLoading: isApproving, error: approveError }] =
    useApproveResourceMutation();
  const [deleteResource, { isLoading: isDeleting, error: deleteError }] =
    useFileDeleteMutation();

  if (isLoading) {
    return <Loader />;
  }

  const files = data?.data || [];

  const handleApprove = async (id: string, fileName: string) => {
    try {
      await approveResource(id).unwrap();
      toast.success(`Resource ${fileName} approved!`);
    } catch (error) {
      toast.error(
        `Failed to approve resource ${fileName}: ${
          approveError?.message || "Unknown error"
        }`
      );
    }
  };

  const handleDelete = async (id: string, fileName) => {
    try {
      await deleteResource(id).unwrap();
      toast.success(`Resource ${fileName} deleted!`);
    } catch (error) {
      toast.error(
        `Failed to delete resource with ID ${id}: ${
          deleteError?.message || "Unknown error"
        }`
      );
    }
  };

  return (
    <>
      <div className="min-h-screen p-6">
        <div className="max-w-7xl mx-auto">
          <div className="sm:flex sm:items-center mb-6">
            <div className="sm:flex-auto">
              <h1 className="text-2xl font-semibold text-gray-800">
                Resources
              </h1>
              <p className="mt-2 text-lg text-gray-700">
                Manage all the resources in your account, including their name,
                description, type, and status.
              </p>
            </div>
          </div>
          <div className="overflow-x-auto bg-white shadow-md rounded-lg">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-3 px-4 text-center text-base font-bold text-black border-r border-gray-300">
                    Number
                  </th>
                  <th className="py-3 px-4 text-left text-base font-bold text-black border-r border-gray-300">
                    Uploaded By
                  </th>
                  <th className="py-3 px-4 text-left text-base font-bold text-black border-r border-gray-300">
                    File Name
                  </th>
                  <th className="py-3 px-4 text-left text-base font-bold text-black border-r border-gray-300">
                    Description
                  </th>
                  <th className="py-3 px-4 text-left text-base font-bold text-black border-r border-gray-300">
                    Type
                  </th>
                  <th className="py-3 px-4 text-left text-base font-bold text-black border-r border-gray-300">
                    Course Name
                  </th>
                  <th className="py-3 px-4 text-left text-base font-bold text-black border-r border-gray-300">
                    File Size
                  </th>
                  <th className="py-3 px-4 text-left text-base font-bold text-black border-r border-gray-300">
                    File Type
                  </th>
                  <th className="py-3 px-4 text-left text-base font-bold text-black border-r border-gray-300">
                    Status
                  </th>
                  <th className="py-3 px-4 text-left text-base font-bold text-black border-r border-gray-300">
                    Download
                  </th>
                  <th className="py-3 px-4 text-left text-base font-bold text-black border-r border-gray-300">
                    Approve
                  </th>
                  <th className="py-3 px-4 text-left text-lg font-bold text-black">
                    Delete
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200 bg-[#fffff6]">
                {files.map((file: any, index: number) => (
                  <tr key={file._id}>
                    <td className="py-4 px-4 text-sm text-gray-900 border-r border-gray-300">
                      {index + 1}
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-900 border-r border-gray-300">
                      {file.uploadedBy}
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-900 border-r border-gray-300">
                      {file.fileName}
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-900 border-r border-gray-300">
                      {file.fileDescription}
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-900 border-r border-gray-300">
                      {file.type}
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-900 border-r border-gray-300">
                      {file.courseName}
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-900 border-r border-gray-300">
                      {file.fileSize} KB
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-900 border-r border-gray-300">
                      {file.fileType}
                    </td>
                    <td className="py-4 px-4 text-sm border-r border-gray-300">
                      <span
                        className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ${
                          file.status === "Approved"
                            ? "bg-green-50 text-green-700"
                            : "bg-red-50 text-red-700"
                        }`}>
                        {file.status}
                      </span>
                    </td>
                    <td className="py-4 px-7 text-sm text-gray-900 border-r border-gray-300">
                      <a
                        href={file.fileUrl}
                        target="_blank"
                        rel="noopener noreferrer">
                        <img
                          src="../../../public/download_465584.png"
                          alt="Download"
                          className="w-6 h-6" // Adjust size here
                        />
                      </a>
                    </td>
                    <td className="py-4 px-4 text-sm border-r border-gray-300 h-5 w-5">
                      {file.status !== "Approved" && (
                        <button
                          onClick={() => handleApprove(file._id, file.fileName)}
                          disabled={isApproving}
                          className={`flex items-center justify-center ${
                            isApproving ? "bg-green-500" : ""
                          } p-2 rounded`}>
                          <img
                            src="../../../public/approved.png"
                            alt="Approve"
                            className="w-8 h-8" // Adjust size here
                          />
                        </button>
                      )}
                    </td>
                    <td className="py-4 px-4 text-sm h-5 w-5">
                      <button
                        onClick={() => handleDelete(file._id, file.fileName)}
                        disabled={isDeleting}
                        className={`flex items-center justify-center ${
                          isDeleting ? "bg-red-500" : ""
                        } p-2 rounded`}>
                        <img
                          src="../../../public/delete.png"
                          alt="Delete"
                          className="w-6 h-6" // Adjust size here
                        />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}