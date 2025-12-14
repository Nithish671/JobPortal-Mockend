import { useState } from "react";
import {
    Button,
    OverlayTrigger,
    Popover,
    Form,
    FloatingLabel
} from "react-bootstrap";
import api from "../api/api";

const SkillsOv = ({profile, setProfile}) => {

    const [skill, setSkill] = useState('');

    const ski = profile.skills;

    const [show, setShow] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        ski.push(skill);

        setProfile({...profile, skills: ski});

        await api.put(`/profile/${profile.id}`, profile);

        setSkill('');
    };

    const popover = (
        <Popover id="popover-basic" className="p-2 pop-edit">
            <Popover.Header as="h3" className="text-danger">
                Add Skills
            </Popover.Header>

            <Popover.Body>
                <Form onSubmit={handleSubmit}>
                    <FloatingLabel
                        controlId="floatingPhone"
                        label="Add skill"
                        className="mb-3"
                    >
                        <Form.Control
                            type="text"
                            name="skill"
                            value={skill}
                            onChange={(e) => setSkill(e.target.value)}
                            required
                        />
                    </FloatingLabel>

                    <div className="d-flex justify-content-end gap-2">
                        <Button
                            variant="secondary"
                            size="sm"
                            onClick={() => setShow(false)}
                        >
                            Cancel
                        </Button>
                        <Button variant="danger" size="sm" type="submit">
                            Add
                        </Button>
                    </div>
                </Form>
            </Popover.Body>
        </Popover>
    );

    return (
        <OverlayTrigger
            trigger="click"
            placement="left"
            show={show}
            overlay={popover}
            rootClose
            onToggle={() => setShow(!show)}
        >
            <i as={Button} className="bi bi-pencil"></i>
        </OverlayTrigger>
    );
};

export default SkillsOv;
