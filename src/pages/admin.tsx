import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'

export default function Admin() {
    const [authed, setAuthed] = useState(false)
    const [password, setPassword] = useState('')
    const [enquiries, setEnquiries] = useState([])
    const [comments, setComments] = useState([])
    const [tab, setTab] = useState('enquiries')

    const ADMIN_PASS = 'Gud2you-atul' // change this!

    const login = () => {
        if (password === ADMIN_PASS) setAuthed(true)
        else alert('Wrong password!')
    }

    useEffect(() => {
        if (!authed) return
        supabase.from('enquiries').select('*').order('created_at', { ascending: false })
            .then(({ data }) => setEnquiries(data || []))
        supabase.from('comments').select('*').order('created_at', { ascending: false })
            .then(({ data }) => setComments(data || []))
    }, [authed])

    if (!authed) return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="bg-white p-8 rounded shadow w-80">
                <h2 className="font-serif text-2xl mb-4">Admin Login</h2>
                <input type="password" value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="Password"
                    className="w-full border p-2 rounded mb-4"
                />
                <button onClick={login}
                    className="w-full bg-brand-gold text-white py-2 rounded">
                    Login
                </button>
            </div>
        </div>
    )

    return (
        <div className="max-w-4xl mx-auto p-8">
            <h1 className="font-serif text-3xl mb-6">Admin Panel — WPF</h1>

            <div className="flex gap-4 mb-6">
                <button onClick={() => setTab('enquiries')}
                    className={`px-4 py-2 rounded ${tab === 'enquiries' ? 'bg-brand-gold text-white' : 'border'}`}>
                    Enquiries ({enquiries.length})
                </button>
                <button onClick={() => setTab('comments')}
                    className={`px-4 py-2 rounded ${tab === 'comments' ? 'bg-brand-gold text-white' : 'border'}`}>
                    Comments ({comments.length})
                </button>
            </div>

            {tab === 'enquiries' && (
                <div className="space-y-4">
                    {enquiries.map((e: any) => (
                        <div key={e.id} className="border p-4 rounded">
                            <p className="font-bold">{e.name} — {e.email}</p>
                            <p className="text-sm text-gray-600">{e.message}</p>
                            <p className="text-xs text-gray-400 mt-1">{new Date(e.created_at).toLocaleString()}</p>
                        </div>
                    ))}
                </div>
            )}

            {tab === 'comments' && (
                <div className="space-y-4">
                    {comments.map((c: any) => (
                        <div key={c.id} className="border p-4 rounded flex justify-between">
                            <div>
                                <p className="font-bold">{c.name}</p>
                                <p className="text-sm">{c.message}</p>
                            </div>
                            <button onClick={async () => {
                                await supabase.from('comments').delete().eq('id', c.id)
                                setComments(comments.filter((x: any) => x.id !== c.id))
                            }} className="text-red-500 text-sm">Delete</button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}