
import { createATask, newTask } from "@/lib/actions";
import { Button, Input, Label, Modal, TextField, ListBox, Select } from "@heroui/react";
const newTaskPage = () => {
    return (
        <div>
            <h2 className="text-5xl text-center">Add Your Information</h2>
            <div className="w-1/2 mx-auto">
                <form action={newTask} className="flex flex-col gap-4">
                    <TextField className="w-full" name="title" type="text">
                        <Label>Title</Label>
                        <Input placeholder="Enter your Title" />
                    </TextField>
                    <TextField className="w-full" name="description" type="text">
                        <Label>description is here</Label>
                        <Input placeholder="Enter your description" />
                    </TextField>
                    <Select name="status" className="w-[256px]" placeholder="Select one">
                        <Label>status</Label>
                        <Select.Trigger>
                            <Select.Value />
                            <Select.Indicator />
                        </Select.Trigger>
                        <Select.Popover>
                            <ListBox>

                                <ListBox.Item id="delaware" textValue="in-progress">
                                    in progress
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                                <ListBox.Item id="california" textValue="progress">
                                    Progress
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                                <ListBox.Item id="texas" textValue="no-progress">
                                    No Progress
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>

                            </ListBox>
                        </Select.Popover>
                    </Select>

                    <Select name="priority" className="w-[256px]" placeholder="Select one">
                        <Label>priority</Label>
                        <Select.Trigger>
                            <Select.Value />
                            <Select.Indicator />
                        </Select.Trigger>
                        <Select.Popover>
                            <ListBox>

                                <ListBox.Item id="delaware" textValue="High">
                                    High
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                                <ListBox.Item id="california" textValue="Low">
                                    Low
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                                <ListBox.Item id="texas" textValue="Nothing">
                                    Nothing
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>

                            </ListBox>
                        </Select.Popover>
                    </Select>

                    <TextField className="w-full" name="assigned_to">
                        <Label>assigned_to</Label>
                        <Input placeholder="Your Name" />
                    </TextField>
                    <Modal.Footer>
                        <Button slot="close" variant="secondary">
                            Cancel
                        </Button>
                        <Button slot="close" type="submit">Submit Form</Button>
                    </Modal.Footer>
                </form>
            </div>
        </div>
    );
};

export default newTaskPage;