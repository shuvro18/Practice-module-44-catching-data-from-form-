"use client";
import { CirclePlus } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextField, ListBox, Select } from "@heroui/react";

const ModalPage = ({ createATask }) => {
    return (
        <Modal>
            <Button variant="secondary">Open Contact Form</Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                <CirclePlus className="size-5" />
                            </Modal.Icon>
                            <Modal.Heading>Contact Us</Modal.Heading>
                            <p className="mt-1.5 text-sm leading-5 text-muted">
                                Fill out the form below and we will get back to you. The modal adapts automatically
                                when the keyboard appears on mobile.
                            </p>
                        </Modal.Header>
                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <form action={createATask} className="flex flex-col gap-4">
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
                            </Surface>
                        </Modal.Body>

                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
};

export default ModalPage;