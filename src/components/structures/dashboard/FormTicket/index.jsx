/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import getData from "../../../../api/getData";
import Label from "../../../elements/globals/Label";
import {
  dataGroups,
  dataOtherStatus,
  dataPriority,
  dataStatus,
} from "../../../../data";
import postData from "../../../../api/postData";
import Button from "../../../elements/globals/Button";

const FormTicket = ({ closeModal }) => {
  const [customers, setCustomers] = useState([]);
  const [formData, setFormData] = useState({
    description: "",
    customer_id: "",
    priority: "",
    status: "",
    created_at: new Date().toISOString(),
    otherStatus: "",
    count: 0,
    group: "",
  });

  useEffect(() => {
    const fetchDataCustomers = async () => {
      try {
        const response = await getData("/customers");
        setCustomers(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDataCustomers();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    const parsedValue = name === "count" ? parseInt(value) : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: parsedValue,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    await postData("/tickets", formData, "ticket");
    setFormData({
      description: "",
      customer_id: "",
      priority: "",
      status: "",
      created_at: "",
      otherStatus: "",
      count: 0,
      group: "",
    });
    closeModal();
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-1">
          <Label className="form-field-label">Description</Label>
          <textarea
            name="description"
            id="description"
            value={formData.description}
            placeholder="Description"
            className="form-field-input"
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="flex items-center w-full gap-2">
          <div className="flex flex-col w-full gap-1">
            <Label className="form-field-label">Customer</Label>
            <select
              name="customer_id"
              value={formData.customer_id}
              className="form-field-input"
              onChange={handleChange}
            >
              <option value="" disabled defaultChecked>
                Select Customer
              </option>
              {customers.map((customer) => (
                <option key={customer.id} value={customer.id}>
                  {customer.name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col w-full gap-1">
            <Label className="form-field-label">Group</Label>
            <select
              name="group"
              value={formData.group}
              className="form-field-input"
              onChange={handleChange}
            >
              <option value="" disabled defaultChecked>
                Select Group
              </option>
              {dataGroups.map((group) => (
                <option key={group.id} value={group.value}>
                  {group.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex items-center w-full gap-2">
          <div className="flex flex-col w-full gap-1">
            <Label className="form-field-label">Priority</Label>
            <select
              name="priority"
              value={formData.priority}
              className="form-field-input"
              onChange={handleChange}
            >
              <option value="" disabled defaultChecked>
                Select Priority
              </option>
              {dataPriority.map((priority) => (
                <option key={priority.id} value={priority.priority}>
                  {priority.priority}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col w-full gap-1">
            <Label className="form-field-label">Count</Label>
            <input
              type="number"
              name="count"
              value={formData.count}
              onChange={handleChange}
              className="form-field-input"
            />
          </div>
        </div>
        <div className="flex items-center w-full gap-2">
          <div className="flex flex-col w-full gap-1">
            <Label className="form-field-label">Status</Label>
            <select
              name="status"
              value={formData.status}
              className="form-field-input"
              onChange={handleChange}
            >
              <option value="" disabled defaultChecked>
                Select Status
              </option>
              {dataStatus.map((status) => (
                <option key={status.id} value={status.status}>
                  {status.status}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col w-full gap-1">
            <Label className="form-field-label">Other Status</Label>
            <select
              name="otherStatus"
              value={formData.otherStatus}
              className="form-field-input"
              onChange={handleChange}
            >
              <option value="" disabled defaultChecked>
                Select Other Status
              </option>
              {dataOtherStatus.map((otherStatus) => (
                <option key={otherStatus.id} value={otherStatus.otherStatus}>
                  {otherStatus.otherStatus}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex items-center justify-end gap-4 mt-2">
          <Button
            type="button"
            className="px-4 py-1 font-medium text-white bg-red-500 rounded-md"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            className="px-4 py-1 font-medium text-white bg-blue-500 rounded-md"
          >
            Submit
          </Button>
        </div>
      </div>
    </form>
  );
};

export default FormTicket;
