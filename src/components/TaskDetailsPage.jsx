import { Card, Link } from "@heroui/react";

const TaskDetailsPage = ({ task }) => {
    const { title, description, assigned_to } = task
    return (
        <div>
            <Card className="">

                <Card.Header>
                    <Card.Title>{title}</Card.Title>
                    <Card.Description>
                        {description}
                    </Card.Description>
                </Card.Header>
                <Card.Footer>
                    <Link
                        aria-label="Go to Acme Creator Hub (opens in new tab)"
                        href="https://heroui.com"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        {assigned_to}
                        <Link.Icon aria-hidden="true" />
                    </Link>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default TaskDetailsPage;