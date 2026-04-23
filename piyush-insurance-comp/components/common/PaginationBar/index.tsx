'use client';

import { Form, Button } from 'react-bootstrap';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import styles from './PaginationBar.module.scss';

export default function PaginationBar() {
    return (
        <div className={styles.container}>
            {/* Go to page */}
            <div className={styles.group}>
                <span>Go to page</span>
                <Form.Control
                    type="number"
                    value={1}
                    readOnly
                    className={styles.input}
                />
            </div>

            {/* Per page */}
            <div className={styles.group}>
                <span>Per page</span>
                <Form.Select defaultValue={100} className={styles.select}>
                    <option value={10}>10</option>
                    <option value={25}>25</option>
                    <option value={50}>50</option>
                    <option value={100}>100</option>
                </Form.Select>
            </div>

            {/* Range */}
            <div className={styles.range}>
                1 - 100 of 124
            </div>

            {/* Navigation */}
            <div className={styles.nav}>
                {/* Left (Disabled) */}
                <Button
                    className={`${styles.navBtn} ${styles.navBtnDisabled}`}
                    disabled
                >
                    <FaChevronLeft />
                </Button>

                {/* Right (Active) */}
                <Button
                    className={`${styles.navBtn} ${styles.navBtnActive}`}
                >
                    <FaChevronRight />
                </Button>
            </div>
        </div>
    );
}