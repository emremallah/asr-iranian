'use client';

import { useState } from 'react';
import editions from '@/data/editions.json';
import Header from '@/components/Header';
import EditionSelector from '@/components/EditionSelector';
import NewspaperView from '@/components/NewspaperView';
import Sidebar from '@/components/sidebar';
import DateSelector from '@/components/DateSelector';

export default function HomePage() {
    const [selectedId, setSelectedId] = useState('1');
    const edition = editions.find(e => e.id === selectedId);

    return (
        <div className="flex min-h-screen bg-[#f2f2f2]">
            <div className="w-full lg:w-[75%] flex flex-col items-center px-6 py-4 space-y-4">
                <div className="w-full flex justify-between items-center">
                    <Header pdfUrl={edition?.pdfUrl} />
                    <DateSelector />
                </div>
                <EditionSelector
                    editions={editions}
                    selectedId={selectedId}
                    onSelect={setSelectedId}
                />
                <NewspaperView imageUrl={edition?.imageUrl} number={edition?.number} />
            </div>

            <Sidebar />
        </div>
    );
}
