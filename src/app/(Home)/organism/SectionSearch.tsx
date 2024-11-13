"use client"
import React from 'react'
import useHomeModel from '../useHomeModel'
import { Input } from '@/ui/component'

const SectionSearch = () => {
    const { setSearch } = useHomeModel()
    return (
        <div>
            <Input
                label=''
                onChange={(e) => setSearch(e.target.value)}
                placeholder='Masukan Nama Produk'
            />
        </div>
    )
}

export default SectionSearch