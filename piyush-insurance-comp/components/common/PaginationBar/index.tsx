'use client';

import { Form, Button } from 'react-bootstrap';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import {
    DEFAULT_PAGE,
    DEFAULT_PER_PAGE,
    TOTAL_ITEMS,
    START_RANGE,
    END_RANGE,
    PER_PAGE_OPTIONS
} from './constants';

import styles from './PaginationBar.module.scss';

export default function PaginationBar() {
    return (
        <div className={styles.container}>
            {/* Go to page */}
            <div className={styles.group}>
                <span>Go to page</span>
                <Form.Control
                    type="number"
                    value={DEFAULT_PAGE}
                    readOnly
                    className={styles.input}
                />
            </div>

            {/* Per page */}
            <div className={styles.group}>
                <span>Per page</span>
                <Form.Select defaultValue={DEFAULT_PER_PAGE} className={styles.select}>
                    {PER_PAGE_OPTIONS.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            </div>

            {/* Range */}
            <div className={styles.range}>
                {START_RANGE} - {END_RANGE} of {TOTAL_ITEMS}
            </div>

            {/* Navigation */}
            <div className={styles.nav}>
                <Button
                    className={`${styles.navBtn} ${styles.navBtnDisabled}`}
                    disabled
                >
                    <FaChevronLeft />
                </Button>

                <Button
                    className={`${styles.navBtn} ${styles.navBtnActive}`}
                >
                    <FaChevronRight />
                </Button>
            </div>
        </div>
    );
}
